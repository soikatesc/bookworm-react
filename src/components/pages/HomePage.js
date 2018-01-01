import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../store/actions';

const HomePage = ({ isAuthenticated, logout }) => (
	<div>
		<h1>HomePage</h1>
		{ 
			isAuthenticated 
			? (
				<button onClick={() => logout()}>Logout</button>
			)
			: (
				<div><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></div>
			)
		}
	</div>
)

HomePage.proTypes = {
	isAuthenticated: PropTypes.bool.isRqquired,
	logout: PropTypes.func.isRqquired
}
const mapStateToProps = state => {
	return {
		isAuthenticated: !!state.user.token
	}
}

export default connect(mapStateToProps, { logout })(HomePage);