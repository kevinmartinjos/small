import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PostContentContainer from '../components/PostContentContainer';
import ReactTestUtils from 'react-addons-test-utils';

test('PostContentContainer should be rendered', () => {
	const component = renderer.create(
		<PostContentContainer content="I am a post" />
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});
