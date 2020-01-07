import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const Home = ({ pageName }) => {
	const userId = useSelector(state => state.auth.userId);

	return (
		<div>
			<h1>
				<FormattedMessage id="pageName.home" />
			</h1>
			<div>
				<p>User Id: {userId}</p>
			</div>
		</div>
	);
};

Home.getInitialProps = async () => {
	return {
		pageName: 'Home Page',
	};
};

export default Home;
