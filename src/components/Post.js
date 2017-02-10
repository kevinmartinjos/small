import React from 'react';
var PropTypes = React.PropTypes;

var Post = React.createClass({
	propTypes: {
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired
	},
	render() {
		return(
			<div className="Post">
				<h3>{this.props.title}</h3>

				<section>{this.props.content}</section>
			</div>
		);
	}
});

export default Post;
