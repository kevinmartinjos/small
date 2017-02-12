import React from 'react';
import renderer from 'react-test-renderer';
import CommentInput from '../components/CommentInput';
import ReactTestUtils from 'react-addons-test-utils';

test('CommentInput should be rendered', () => {
	const component = renderer.create(
		<CommentInput submitCallback={function(){}} postId="1"/>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Should reload comments on submit', () => {
	var flag = 0;

	//onSubmit is passed as a callback. onSubmit *could* reload all comments of a post
	//when a new comment is submitted
	var onSubmit = function(){
		flag = 1;
	};

	//mocking an event object to pass to handleSubmit
	var event = {};
	event.preventDefault = function(){};

	let component = ReactTestUtils.renderIntoDocument(<CommentInput submitCallback={onSubmit} postId="1"/>);
  	component.handleSubmit(event);
  	
  	expect(flag).toEqual(1);
});