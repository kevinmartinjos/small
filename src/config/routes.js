import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main';
import App from '../components/App';

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component = {App}>
			<IndexRoute component={Main} />
		</Route>
	</Router>
);

export default routes;