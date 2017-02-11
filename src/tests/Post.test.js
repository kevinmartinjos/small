import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Post from '../components/Post';
import ReactTestUtils from 'react-addons-test-utils';

test('Post should be rendered', () => {
	const component = renderer.create(
		<Post title="Test" content="I am post" />
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});

test('Post should render html', () => {
	let component = ReactTestUtils.renderIntoDocument(<Post title="Test" content="I am a <span>span</span>" />);
	let node = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'section');
	expect(node.textContent).toBe('I am a span');
});