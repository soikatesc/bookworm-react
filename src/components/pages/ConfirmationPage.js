import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { confirm } from '../../store/actions';

class ConfirmationPage extends Component {
	state = {
		loading: true,
		success: false
	}

	componentDidMount() {
		this.props.confirm(this.props.match.params.token)
			.then(() => this.setState({ loading: false, success: true }))
			.catch(() => this.setState({ loading: false, success: false }))
	}

	render() {
		const { loading, success } = this.state;
		return (
			<div>
				{loading && (
					<Message icon>
						<Icon name="circle notched" loading />
						<Message.Header>Validating your email</Message.Header>
					</Message>
				)}

				{!loading && success && (
					<Message success icon>
						<Icon name="checkmark" />
						<Message.Content>
							<Message.Header>Thank you. Your account has been varified.</Message.Header>
							<Link to="/dashboard">Go to your dashboard </Link>
						</Message.Content>
					</Message>
				)}

				{!loading && !success && (
					<Message negative icon>
						<Icon name="warning sign" />
						<Message.Content>
							<Message.Header>Ooops.Invaid token</Message.Header>
						</Message.Content>
					</Message>
				)}
			</div>
		);
	}
}

ConfirmationPage.propTypes = {
	match: PropTypes.shape({
	  params: PropTypes.shape({
	  	token: PropTypes.string.isRequired
	  }).isRequired,
	}).isRequired,
	confirm: PropTypes.func.isRequired
};

export default connect(null, { confirm })(ConfirmationPage);
