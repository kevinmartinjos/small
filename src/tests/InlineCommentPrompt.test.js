import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import InlineCommentPrompt from '../components/InlineCommentPrompt';
import ReactTestUtils from 'react-addons-test-utils';


test('InlineCommentPrompt should be rendered', () => {
	function submitHandlerCallback(){};
	function cancelCallback(){};
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

	let component = ReactTestUtils.renderIntoDocument(<InlineCommentPrompt x={1} y={1} 
														submitHandlerCallback={submitHandlerCallback}
														cancelCallback={cancelCallback}
													/>);
	component.handlePromptClick();
	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'InlineCommentInputContainer');
	expect(node).not.toBe(undefined);
});
