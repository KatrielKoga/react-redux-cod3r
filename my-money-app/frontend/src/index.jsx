import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import multi from 'redux-multi';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './main/reducers';
import Routes from './main/routes';

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(
	reducers,
	devTools
);
ReactDom.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('app')
);
