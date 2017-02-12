import React from 'react';
import PostContentContainer from './PostContentContainer';

var PropTypes = React.PropTypes;

var Post = React.createClass({
	propTypes: {
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		handleSelection: PropTypes.func
	},
	render() {
		return(
			<div className="Post">
				<h2 className="title">{this.props.title}</h2>
				<div onMouseUp={this.props.handleSelection}>
					<PostContentContainer content={this.props.content} />
				</div>
			</div>
		);
	}
});

export default Post;
