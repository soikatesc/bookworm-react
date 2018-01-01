import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import decode from 'jwt-decode';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import rootReducer from './store/reducers';
import { userLoggedIn } from './store/actions';
import setAuthorizationHeader from './utils/setAuthorizationHeader';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = process.env.NODE_ENV ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
)

if (localStorage.bookwormJWT) {
	const payload = decode(localStorage.bookwormJWT);
	const user = { 
		token: localStorage.bookwormJWT, 
		email: payload.email, confirmed: 
		payload.confirmed 
	};
	setAuthorizationHeader(localStorage.bookwormJWT);
	store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route component={App} />
		</BrowserRouter>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
