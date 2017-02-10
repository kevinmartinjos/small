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