import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import InlineCommentInputContainer from '../components/InlineCommentInputContainer';
import ReactTestUtils from 'react-addons-test-utils';

test('InlineCommentInputContainer should be rendered', () => {
	const component = renderer.create(
		<InlineCommentInputContainer content="I am a post" />
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});
