import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CommentInput from '../components/CommentInput';
import ReactTestUtils from 'react-addons-test-utils'

test('CommentInput should be rendered', () => {
	const component = renderer.create(
		<CommentInput />
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});