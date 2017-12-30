import { USER_LOGGED_IN } from './types';
import api from './api';

export const userLoggedIn = (user) => ({
	type: USER_LOGGED_IN,
	user
})


export const login = (credientials) => dispatch => 
	api.user.login(credientials).then(user => dispatch(userLoggedIn(user)));