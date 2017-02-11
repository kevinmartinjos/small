import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import InlineCommentInputContainer from '../components/InlineCommentInputContainer';
import ReactTestUtils from 'react-addons-test-utils';

test('InlineCommentInputContainer should be rendered', () => {
	function submitHandlerCallback(){};
	function cancelCallback(){};
	const component = renderer.create(
		<InlineCommentInputContainer content="I am a post"
			submitHandlerCallback={submitHandlerCallback}
			cancelCallback={cancelCallback}
		/>
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});
