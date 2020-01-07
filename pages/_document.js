import Document, { Html, Head, Main, NextScript } from 'next/document';

import styles from '../styles/common.scss';

export default class SiteDocument extends Document {
	static async getInitialProps(context) {
		const props = await super.getInitialProps(context);
		const {
			req: { locale, localeDataScript },
		} = context;
		return {
			...props,
			locale,
			localeDataScript,
		};
	}
	render() {
		// Polyfill Intl API for older browsers
		const polyfill = `https://cdn.polyfill.io/v3/polyfill.min.js?features=Intl.~locale.${this.props.locale}`;

		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<body className={styles.body}>
					<div className="root">
						<Main />
						<script src={polyfill} />
						<script
							dangerouslySetInnerHTML={{
								__html: this.props.localeDataScript,
							}}
						/>
					</div>
					<NextScript />
				</body>
			</Html>
		);
	}
}
