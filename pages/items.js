/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from '../routes';
import styles from '../styles/pages/items.scss';

const Items = props => {
	const { pageName, itemsList } = props;
	return (
		<div>
			<h1>{pageName}</h1>
			{itemsList.map(item => (
				<Link key={item} route={`items/${item}`}>
					<a className={styles.item}>{item}</a>
				</Link>
			))}
		</div>
	);
};

Items.getInitialProps = () => {
	return {
		pageName: 'Items',
		itemsList: ['item-1', 'item-2', 'item-3', 'item-4'],
	};
};

export default Items;
