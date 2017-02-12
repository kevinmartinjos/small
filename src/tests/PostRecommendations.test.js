import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PostRecommendations from '../components/PostRecommendations';
import ReactTestUtils from 'react-addons-test-utils';

test('PostRecommendations should be rendered', () => {
	const component = renderer.create(
		<PostRecommendations recommendations={[1]} />
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});
