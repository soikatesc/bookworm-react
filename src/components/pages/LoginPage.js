import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginForm from '../forms/LoginForm';
import { login } from '../../store/actions';

class LoginPage extends Component {
	submit = (data) => this.props.login(data).then(() => this.props.history.push("/dashboard"))

	render() {
		return (
			<div>
				<h1>LoginPage</h1>

				<LoginForm submit={this.submit}/>

				<Link to="/forgot_password">Forgot Password</Link>
			</div>
		);
	}
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
