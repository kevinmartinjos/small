import React from 'react';
import renderer from 'react-test-renderer';
import PostRecommendations from '../components/PostRecommendations';

test('PostRecommendations should be rendered', () => {
	const component = renderer.create(
		<PostRecommendations recommendations={[1]} />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
