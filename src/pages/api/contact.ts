import type { APIRoute } from 'astro';
import { contact, formLimits, honeypotField } from '../../data/contact';

export const prerender = false;

const TO_ADDRESS = contact.email;
const FROM_ADDRESS = 'A&T Projects website <contact@atprojects.be>';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: object, status: number) =>
	new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
	let data: FormData;
	try {
		data = await request.formData();
	} catch {
		return json({ error: 'Ongeldig verzoek.' }, 400);
	}
	const field = (key: string) => data.get(key)?.toString().trim() ?? '';

	// Bots fill the hidden field: answer "ok" so they move on, but send nothing.
	if (field(honeypotField)) return json({ ok: true }, 200);

	const name = field('name').replace(/[\r\n]+/g, ' ');
	const phone = field('phone');
	const email = field('email');
	const message = field('message');

	if (!name || !email || !message) {
		return json({ error: 'Vul alle verplichte velden in.' }, 400);
	}
	if (!EMAIL_RE.test(email)) {
		return json({ error: 'Vul een geldig e-mailadres in.' }, 400);
	}
	if (
		name.length > formLimits.name ||
		phone.length > formLimits.phone ||
		email.length > formLimits.email ||
		message.length > formLimits.message
	) {
		return json({ error: 'Een van de velden is te lang.' }, 400);
	}

	const apiKey = import.meta.env.RESEND_API_KEY;
	if (!apiKey) {
		console.error('RESEND_API_KEY is not set');
		return json({ error: 'Verzenden mislukt.' }, 500);
	}

	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from: FROM_ADDRESS,
			to: TO_ADDRESS,
			reply_to: email,
			subject: `Nieuw bericht via website van ${name}`,
			text: `Naam: ${name}\nTelefoon: ${phone || '-'}\nE-mail: ${email}\n\nBericht:\n${message}`,
		}),
	});

	if (!res.ok) {
		console.error('Resend error:', await res.text());
		return json({ error: 'Verzenden mislukt.' }, 502);
	}

	return json({ ok: true }, 200);
};
