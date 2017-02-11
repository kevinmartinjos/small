import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Comment from '../components/Comment';
import ReactTestUtils from 'react-addons-test-utils';

test('Comment should be rendered', () => {
	const component = renderer.create(
		<Comment content="I am a comment" />
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});

test('Comment should render html', () => {
	let component = ReactTestUtils.renderIntoDocument(<Comment content="I am a <span>span</span>" />);
	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'Comment');
	expect(node.textContent).toBe('I am a span');
});