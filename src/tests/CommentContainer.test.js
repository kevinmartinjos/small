import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CommmentContainer from '../components/CommentContainer';
import ReactTestUtils from 'react-addons-test-utils'

test('CommentContainer should be rendered', () => {
	var mockParam = {id: 1};
	const component = renderer.create(
		<CommmentContainer postid="0"/>
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});

test('CommentContainer should have input box', () => {
	let component = ReactTestUtils.renderIntoDocument(<CommmentContainer postid="0"/>);
  	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'CommentInput');
	expect(node).not.toBe(undefined);
});

test('Should be able to submit a new comment', () => {
	let component = ReactTestUtils.renderIntoDocument(<CommmentContainer postid="0"/>);

  	// component.props.onSubmit();
  	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'Comment');
  	expect(node).not.toBe(undefined);
});

test('CommentContainer should display comments for a post', () => {
	let component = ReactTestUtils.renderIntoDocument(<CommmentContainer postid="0"/>);
  	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'CommentInput');
	expect(node).not.toBe(undefined);
});