import { createAction } from '@reduxjs/toolkit';

import * as authServices from './authServices';

const login = createAction('LOGIN');
const loginFailed = createAction('LOGIN_FAILED');

const processLogin = data => async dispatch => {
	try {
		const response = await authServices.login({
			username: data.username,
			password: data.password,
		});
		dispatch(login(response));
	} catch (err) {
		dispatch(loginFailed());
	}
};

export { login, loginFailed, processLogin };
