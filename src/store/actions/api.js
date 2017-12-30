import axios from 'axios';

export default {
	user: {
		login: (credientials) => 
			axios.post('/api/auth', { credientials }).then(res => res.data.user)
	}
}