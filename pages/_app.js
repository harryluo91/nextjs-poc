import { Provider } from 'react-redux';
import { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

import makeStore from '../store/configureStore';
import Layout from '../components/layouts/layout';

function MyApp({ Component, store, pageProps }) {
	const { pageName, ...props } = pageProps;
	return (
		<Container>
			<Provider store={store}>
				<Layout pageName={pageName}>
					<Component {...props} />
				</Layout>
			</Provider>
		</Container>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async ({ Component, ctx }) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	return {
		pageProps: {
			// Call page-level getInitialProps
			...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
		},
	};
};

export default withRedux(makeStore, { debug: true })(MyApp);
