import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PostContainer from '../components/PostContainer';
import ReactTestUtils from 'react-addons-test-utils'

function Selection(){
	return {
		toString: function(){
			return 'user selected text';
		},
		getRangeAt: function(){
			return {
				startContainer: {
					parentElement: {
						id: '1234'
					}
				},
				getClientRects: function(){
					return[{
						right: 0,
						top: 0
					}]
				}
			}
		}
	};
};

function getSelection(){
	return new Selection();
};

//we use window.getSelection() to get selected text. Mocking it
Object.defineProperty(window, 'getSelection', { value: getSelection });

test('PostContainer should be rendered', () => {
	var mockParam = {id: '1'};
	const component = renderer.create(
		<PostContainer params={mockParam}/>
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});

test('Comments should be rendered', () => {
	var mockParam = {id: '1'};
	let component = ReactTestUtils.renderIntoDocument(<PostContainer params={mockParam}/>);
  	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'CommentContainer');
});

test('Should return user selected text', () => {
	var mockParam = {id: '1'};
	
	var event = {
		clientX: 10
	};

	let component = ReactTestUtils.renderIntoDocument(<PostContainer params={mockParam}/>);
	component.postContainer = {
		getClientRects: function(){
			return[{
				right: 0,
				top: 0,
				left: 0
			}]
		}
	};

	component.getSelection(event);
  	expect(component.state.selectedText).toEqual("user selected text");
});

test('should show inline commentbox prompt on selection', () => {
	var mockParam = {id: '1'};
	
	var event = {
		clientX: 10,
		clientY: 10
	};

	let component = ReactTestUtils.renderIntoDocument(<PostContainer params={mockParam}/>);
	component.postContainer = {
		getClientRects: function(){
			return[{
				right: 0,
				top: 0,
				left: 0
			}]
		}
	};
	component.getSelection(event);
	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'InlineCommentPrompt');
});

test('should hide commentbox prompt on cancel', () => {
	var mockParam = {id: '1'};
	
	var event = {
		clientX: 10,
		clientY: 10
	};

	let component = ReactTestUtils.renderIntoDocument(<PostContainer params={mockParam}/>);
	component.postContainer = {
		getClientRects: function(){
			return[{
				right: 0,
				top: 0,
				left: 0
			}]
		}
	};
	component.getSelection(event);
	component.inlineCommentPrompt.handlePromptClick();
	component.inlineCommentPrompt.commentInputContainer.handleCancel();
	expect(ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'InlineCommentPrompt').length).toBe(0);
	expect(ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'InlineCommentInputContainer').length).toBe(0);
});