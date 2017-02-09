import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PostPreview from '../components/PostPreview';


test('PostPreview should be rendered', () => {
	const component = renderer.create(
		<PostPreview className="s" preview="this is not bar">hi</PostPreview>
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});
