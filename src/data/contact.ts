// Single source for company contact facts: used by the Contact section and the JSON-LD in Layout.
export const contact = {
	name: 'A&T Projects BV',
	email: 'info@atprojects.be',
	phones: ['0470 21 93 08', '0497 99 06 06'],
	// Confirmed by the client on 2026-10-21.
	whatsapp: '0470 21 93 08',
	// Client's own words (2026-10-21): mostly Gent, then the rest of Flanders.
	serviceArea: { city: 'Gent', region: 'Vlaanderen' },
	street: 'Kerkstraat 108',
	postalCode: '9050',
	locality: 'Gent',
	country: 'BE',
	// Checked in the KBO register (kbopub.economie.fgov.be) on 2026-10-12.
	vatNumber: 'BE 0439.057.830',
	// Same as the Google Business Profile (filled in by the client).
	foundingDate: '1989-12-01',
	openingHours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '19:00' },
};

/** Max field lengths of the contact form, enforced in the markup and again in /api/contact. */
export const formLimits = { name: 100, phone: 40, email: 200, message: 5000 };

/** Hidden anti-spam field: people never see it, bots fill it in. */
export const honeypotField = 'company';

/** '0470 21 93 08' → '+32470219308' */
export const toE164 = (phone: string) => '+32' + phone.replace(/\s/g, '').replace(/^0/, '');

/** '0470 21 93 08' → 'https://wa.me/32470219308' */
export const toWhatsAppUrl = (phone: string) => 'https://wa.me/' + toE164(phone).slice(1);
