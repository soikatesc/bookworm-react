import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allBooksSelector } from '../../store/reducers/books';
import AddBookCtA from '../ctas/AddBookCtA';
import { fetchBooks } from '../../store/actions';

class DashboardPage extends Component {
	componentDidMount = () => this.onInit(this.props);

	onInit = (props) => props.fetchBooks();

	render() {
		const { isConfirmed, books } = this.props;
		return (
			<div>
				{!isConfirmed && <ConfirmEmailMessage />}
				{books.length === 0 ? <AddBookCtA /> : <p>You have books</p>}
			</div>
		);
	}
}

DashboardPage.propTypes = {
	isConfirmed: PropTypes.bool.isRequired,
	books: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired
	}).isRequired).isRequired,
	fetchBooks: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		isConfirmed: state.user.confirmed,
		books: allBooksSelector(state)
	}
}

export default connect(mapStateToProps, { fetchBooks })(DashboardPage);