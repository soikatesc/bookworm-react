import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allBooksSelector } from '../../store/reducers/books';
import AddBookCtA from '../ctas/AddBookCtA';

const DashboardPage = ({ isConfirmed, books }) => (
	<div>
		{!isConfirmed && <ConfirmEmailMessage />}
		{books.length === 0 && <AddBookCtA />}
	</div>
);

DashboardPage.propTypes = {
	isConfirmed: PropTypes.bool.isRequired,
	books: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired
	}).isRequired).isRequired
};

const mapStateToProps = state => {
	return {
		isConfirmed: state.user.confirmed,
		books: allBooksSelector(state)
	}
}

export default connect(mapStateToProps)(DashboardPage);