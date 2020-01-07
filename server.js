// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
const IntlPolyfill = require('intl');
Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
const { readFileSync } = require('fs');
const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

const localeDataCache = new Map();
const getLocaleDataScript = locale => {
	const lang = locale.split('-')[0];
	if (!localeDataCache.has(lang)) {
		const localeDataFile = require.resolve(
			`@formatjs/intl-relativetimeformat/dist/locale-data/${lang}`
		);
		const localeDataScript = readFileSync(localeDataFile, 'utf8');
		localeDataCache.set(lang, localeDataScript);
	}
	return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = locale => {
	return require(`./messages/${locale}.js`);
};

app.prepare().then(() => {
	const server = express();
	// const locale = 'en';
	// const localeDataScript = getLocaleDataScript(locale);
	// const messages = getMessages(locale);

	server.get('*', (req, res) => {
		console.log('hello');
		const locale = 'en';
		req.locale = locale;
		req.localeDataScript = getLocaleDataScript(locale);
		req.messages = getMessages(locale);

		return handle(req, res);
	});

	server.use(handler);

	server.listen(3000, err => {
		if (err) throw err;
		console.log('> Ready on http://localhost:3000');
	});
});
