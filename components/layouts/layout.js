import Head from 'next/head';
import Header from '../header';

import styles from '../../styles/common.scss';

export default ({ children, pageName = 'Next.js POC' }) => (
	<div>
		<Head>
			<title>{pageName}</title>
		</Head>
		<header>
			<Header />
		</header>

		<main>
			<div className={styles.container}>{children}</div>
		</main>
	</div>
);
