import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authReducer';
// import userReducer from './user/userReducer';

const makeStore = (initialState, options) =>
	configureStore({
		reducer: {
			auth: authReducer,
			// user: userReducer,
		},
		preloadedState: initialState,
	});

export default makeStore;
