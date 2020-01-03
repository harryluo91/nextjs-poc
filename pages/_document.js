import Document, { Html, Head, Main, NextScript } from 'next/document';

import styles from '../styles/common.scss';

export default class SiteDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<body className={styles.body}>
					<div className="root">
						<Main />
					</div>
					<NextScript />
				</body>
			</Html>
		);
	}
}
