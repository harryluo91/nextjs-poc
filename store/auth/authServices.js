import request from '../../utils/apiUtils';

const login = data => {
	return request({
		url: 'auth/login',
		method: 'POST',
		data: {
			username: data.username,
			password: data.password,
		},
	});
};

export { login };
