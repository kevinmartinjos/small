import React from 'react';
import PostContainer from '../components/PostContainer';
import ReactTestUtils from 'react-addons-test-utils';
import {Router, Route, IndexRoute, createMemoryHistory} from 'react-router';
import App from '../components/App';
import Main from '../components/Main';

const history = createMemoryHistory('/posts/1');

test('should load a post', () => {
	let component = ReactTestUtils.renderIntoDocument(<Router history={history}>
		<Route path='/' component = {App}>
			<IndexRoute component={Main} />
			<Route path="/posts/:id" component={PostContainer}/>
		</Route>
	</Router>);
	ReactTestUtils.findRenderedDOMComponentWithClass(component, 'Post');
});


