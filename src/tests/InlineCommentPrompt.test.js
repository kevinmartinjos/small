import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import InlineCommentPrompt from '../components/InlineCommentPrompt';
import ReactTestUtils from 'react-addons-test-utils';

test('InlineComment should be rendered', () => {
	const component = renderer.create(
		<InlineCommentPrompt />
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});
