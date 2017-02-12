import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PostRecommendations from '../components/PostRecommendations';
import ReactTestUtils from 'react-addons-test-utils';

test('PostRecommendations should be rendered', () => {
	var posts = [{
		id: '1',
		title: 'foo',
		content: 'bar',
		recommendations: [1]
	}];

	const component = renderer.create(
		<PostRecommendations posts={posts} />
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});
