import v4 from 'uuid/v4';

export default (req, res) => {
	switch (req.method) {
		case 'POST':
		default: {
			if (req.body.username === 'test' && req.body.password === 'test') {
				res.status(200).json({
					authToken: v4(),
					userId: 'user-1',
				});
			} else {
				res.status(500).json({
					message: 'Something is wrong!',
				});
			}
		}
	}
};
