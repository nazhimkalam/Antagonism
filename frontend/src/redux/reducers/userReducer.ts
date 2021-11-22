import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

const { login, logout } = userReducer.actions;
const selectUser = (state: any) => state.user.user;

export { userReducer, login, logout, selectUser };