import { createReducer } from '@reduxjs/toolkit';

import { InitialState } from './authModels';

const authReducer = createReducer(InitialState, {
	LOGIN: (state, payload) => {
		state.userId = payload.userId;
		state.authToken = payload.authToken;
	},
});

export default authReducer;
