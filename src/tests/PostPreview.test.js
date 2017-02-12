import React from 'react';
import renderer from 'react-test-renderer';
import PostPreview from '../components/PostPreview';

test('PostPreview should be rendered', () => {
	const component = renderer.create(
		<PostPreview id={1} title="foo" previewText="this is not bar" />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});


