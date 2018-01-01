import { createSelector } from 'reselect';
import { BOOKS_FETCHED, BOOK_CREATED } from '../actions/types';

export default function books(state={}, action={}) {
	switch(action.type) {
		case BOOKS_FETCHED:
			return { ...state, ...action.data.entities.books };
		case BOOK_CREATED:
			return { ...state, ...action.data.entities.books };
		default: 
			return state;
	}
}

// SELECTORs

export const bookSelector = state => state.books;

export const allBooksSelector = createSelector(
	bookSelector,
	booksHash => Object.values(booksHash)
);