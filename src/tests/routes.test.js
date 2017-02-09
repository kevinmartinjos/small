import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PostPreview from '../components/PostPreview';
import PostContainer from '../components/PostContainer';
import ReactTestUtils from 'react-addons-test-utils'
import {Router, Route, IndexRoute, createMemoryHistory} from 'react-router';
import App from '../components/App';
import Main from '../components/Main';

const history = createMemoryHistory("/posts/1");

test('should load a post', () => {
	// let post = ReactTestUtils.renderIntoDocument(<PostContainer />);
	// let title = ReactDOM.findRenderedDOMComponentWithTag(post, 'h3');
	// expect(ReactDOM.findDOMNode(title).textContent).toBe('Test post');
	let component = ReactTestUtils.renderIntoDocument(<Router history={history}>
		<Route path='/' component = {App}>
			<IndexRoute component={Main} />
			<Route path="/posts/:id" component={PostContainer}/>
		</Route>
	</Router>);
	let node = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h3');
	expect(node.textContent).toBe('Test post');
});


