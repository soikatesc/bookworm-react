import { USER_LOGGED_IN } from '../actions/types';

export default function usr(state = {}, action = {}) {
	switch(action.type) {
		case USER_LOGGED_IN:
			return action.user;
		default: return state;
	}
}