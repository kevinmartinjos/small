import React from 'react';
import renderer from 'react-test-renderer';
import PostContentContainer from '../components/PostContentContainer';

test('PostContentContainer should be rendered', () => {
	const component = renderer.create(
		<PostContentContainer content="I am a post" />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
