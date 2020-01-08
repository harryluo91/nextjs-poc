const ItemDetails = props => {
	return <div>{props.pageName}</div>;
};

ItemDetails.getInitialProps = ({ query }) => {
	return {
		pageName: `Items - ${query.itemId}`,
	};
};

export default ItemDetails;
