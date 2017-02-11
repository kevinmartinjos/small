import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import InlineComment from '../components/InlineComment';
import ReactTestUtils from 'react-addons-test-utils';

test('InlineComment should be rendered', () => {
	const component = renderer.create(
		<InlineComment />
	);
	let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
});
