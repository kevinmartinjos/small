import React from 'react';
import renderer from 'react-test-renderer';
import InlineCommentPrompt from '../components/InlineCommentPrompt';
import ReactTestUtils from 'react-addons-test-utils';


test('InlineCommentPrompt should be rendered', () => {
	function submitHandlerCallback(){}
	function cancelCallback(){}
	const component = renderer.create(
		<InlineCommentPrompt x={1} y={1}
			submitHandlerCallback={submitHandlerCallback}
			cancelCallback={cancelCallback}
		/>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Display InlineCommentInputContainer when pressed', () => {
	function submitHandlerCallback(){}
	function cancelCallback(){}
	let component = ReactTestUtils.renderIntoDocument(
													<InlineCommentPrompt x={1} y={1}
														submitHandlerCallback={submitHandlerCallback}
														cancelCallback={cancelCallback}
													/>);
	component.handlePromptClick();
	ReactTestUtils.findRenderedDOMComponentWithClass(component, 'InlineCommentInputContainer');
});
