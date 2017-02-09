import React, { Component } from 'react';
var PropTypes = React.PropTypes;

var PostPreview = React.createClass({
	PropTypes: {
		title: PropTypes.string.isRequired,
		previewText: PropTypes.string.isRequired
	},

	render() {
		return( 
			<div className="PostPreview">
				booz
			</div>
		);
	}
});

export default PostPreview;
