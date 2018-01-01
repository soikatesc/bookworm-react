import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatarurl from 'gravatar-url';
import PropTypes from 'prop-types';

import { logout } from '../../store/actions';
import { allBooksSelector } from "../../store/reducers/books";

const TopNavigation = ({ user, logout, hasBooks }) => (
	<Menu secondary pointing>
		<Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>

		{ hasBooks && <Menu.Item as={Link} to="/books/new">
			Add New Book
		</Menu.Item>}

		<Menu.Menu position="right">
			<Dropdown trigger={<Image avatar src={gravatarurl(user.email)}/>}>
				<Dropdown.Menu>
					<Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Menu>
	</Menu>
);

TopNavigation.propTypes = {
	user: PropTypes.shape({
		email: PropTypes.string.isRequired
	}).isRequired,
	logout: PropTypes.func.isRequired,
	hasBooks: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		user: state.user,
		hasBooks: allBooksSelector(state).length > 0
	}
}

export default connect(mapStateToProps, { logout })(TopNavigation);