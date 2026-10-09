// Single source for company contact facts: used by the Contact section and the JSON-LD in Layout.
export const contact = {
	name: 'A&T Projects BV',
	email: 'info@atprojects.be',
	phones: ['0470 21 93 08', '0497 99 06 06'],
	street: 'Kerkstraat 108',
	postalCode: '9050',
	locality: 'Gentbrugge',
	country: 'BE',
	foundingYear: '1989',
};

/** Max field lengths of the contact form, enforced in the markup and again in /api/contact. */
export const formLimits = { name: 100, phone: 40, email: 200, message: 5000 };

/** Hidden anti-spam field: people never see it, bots fill it in. */
export const honeypotField = 'company';

/** '0470 21 93 08' → '+32470219308' */
export const toE164 = (phone: string) => '+32' + phone.replace(/\s/g, '').replace(/^0/, '');
