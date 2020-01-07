import { createReducer } from '@reduxjs/toolkit';

import { InitialState } from './authModels';

const authReducer = createReducer(InitialState, {
	LOGIN: (state, action) => {
		state.userId = action.payload.userId;
		state.authToken = action.payload.authToken;
	},
});

export default authReducer;
