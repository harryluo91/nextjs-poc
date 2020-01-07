const ItemList = props => {
	return <div>{props.pageName}</div>;
};

ItemList.getInitialProps = () => {
	return {
		pageName: 'Item List',
	};
};

export default ItemList;
