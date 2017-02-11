import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PostContainer from '../components/PostContainer';
import ReactTestUtils from 'react-addons-test-utils'

function getSelection(){
	return "user selected text";
}

//we use window.getSelection() to get selected text. Mocking it
Object.defineProperty(window, 'getSelection', { value: getSelection });

test('PostContainer should be rendered', () => {
	var mockParam = {id: 1};
	const component = renderer.create(
		<PostContainer routeParams={mockParam}/>
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});

test('Comments should be rendered', () => {
	var mockParam = {id: 1};
	let component = ReactTestUtils.renderIntoDocument(<PostContainer routeParams={mockParam}/>);
  	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'CommentContainer');
	expect(node).not.toBe(undefined);
});

test('Should return user selected text', () => {
	var mockParam = {id: 1};
	
	var event = {
		clientX: 10
	};

	

	let component = ReactTestUtils.renderIntoDocument(<PostContainer routeParams={mockParam}/>);
	component.getSelection(event);
  	expect(component.state.selectedText).toEqual("user selected text");
});

test('Should mark user selected test in html', () => {
	expect(1).toEqual(2);
});

test('should show inline commentbox on selection', () => {
	var mockParam = {id: 1};
	
	var event = {
		clientX: 10,
		clientY: 10
	};

	let component = ReactTestUtils.renderIntoDocument(<PostContainer routeParams={mockParam}/>);
	component.getSelection(event);
	let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'InlineComment');
});