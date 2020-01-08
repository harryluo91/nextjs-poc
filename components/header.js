/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from '../routes';

import styles from '../styles/components/header.scss';

const HEADER_LINKS = [
	{ path: '/', label: 'Home' },
	{ path: '/item-list', label: 'Item List' },
	{ path: '/login', label: 'Login' },
].map(link => {
	link.key = `nav-link-${link.path}-${link.label}`;
	return link;
});

const Header = () => (
	<div className={styles.container}>
		<nav>
			<ul className={styles.listWrapper}>
				{HEADER_LINKS.map(link => (
					<Link key={link.key} route={link.path}>
						<a className={styles.linkItem}>{link.label}</a>
					</Link>
				))}
			</ul>
		</nav>
	</div>
);

export default Header;
