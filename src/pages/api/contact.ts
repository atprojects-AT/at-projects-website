import type { APIRoute } from 'astro';

export const prerender = false;

const TO_ADDRESS = 'info@atprojects.be';
const FROM_ADDRESS = 'A&T Projects website <contact@atprojects.be>';

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const name = data.get('name')?.toString().trim();
	const phone = data.get('phone')?.toString().trim();
	const email = data.get('email')?.toString().trim();
	const message = data.get('message')?.toString().trim();

	if (!name || !email || !message) {
		return new Response(JSON.stringify({ error: 'Vul alle verplichte velden in.' }), { status: 400 });
	}

	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${import.meta.env.RESEND_API_KEY}`,
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
		return new Response(JSON.stringify({ error: 'Verzenden mislukt.' }), { status: 502 });
	}

	return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
