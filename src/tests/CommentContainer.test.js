import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CommentContainer from '../components/CommentContainer';
import ReactTestUtils from 'react-addons-test-utils'

test('CommentContainer should be rendered', () => {
	var mockParam = {id: 1};
	const component = renderer.create(
		<CommentContainer postId="0"/>
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});

test('CommentContainer should have input box', () => {
	let component = ReactTestUtils.renderIntoDocument(<CommentContainer postId="0"/>);
  	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'CommentInput');
});

test('CommentContainer should display comments for a post', () => {
	let component = ReactTestUtils.renderIntoDocument(<CommentContainer postId="0"/>);
  	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'CommentInput');
});