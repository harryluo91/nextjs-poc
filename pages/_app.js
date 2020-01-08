import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { IntlProvider } from 'react-intl';

import makeStore from '../store/configureStore';
import Layout from '../components/layouts/layout';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		// Get the `locale` and `messages` from the request object on the server.
		// In the browser, use the same values that the server serialized.
		const { req } = ctx;
		const { locale, messages } = req || window.__NEXT_DATA__.props.initialProps;
		return {
			pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
			locale,
			messages,
		};
	}

	render() {
		const { Component, pageProps, store, locale, messages } = this.props;
		return (
			<Provider store={store}>
				<IntlProvider key={locale} locale={locale} defaultLocale={locale} messages={messages}>
					<Layout pageName={pageProps.pageName}>
						<Component {...pageProps} />
					</Layout>
				</IntlProvider>
			</Provider>
		);
	}
}

export default withRedux(makeStore)(MyApp);
