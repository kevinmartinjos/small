import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PostContainer from '../components/PostContainer';
import ReactTestUtils from 'react-addons-test-utils'

test('PostContainer should be rendered', () => {
	var mockParam = {id: 1};
	const component = renderer.create(
		<PostContainer routeParams={mockParam}/>
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});

test('Comments should be rendered', () => {
	var mockParam = {id: 1};
	let component = ReactTestUtils.renderIntoDocument(<PostContainer routeParams={mockParam}/>);
  	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'CommentContainer');
	expect(node).not.toBe(undefined);
});
