import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../styles/PostContentContainer.css';

var PropTypes = React.PropTypes;

var PostContentContainer = React.createClass({
	propTypes: {
		content: PropTypes.string.isRequired,
		onMouseUp: PropTypes.func
	},
	render() {
		return(
			<div className="PostContentContainer">
				<section>{ReactHtmlParser(this.props.content)}</section>
			</div>
		);
	}
});

export default PostContentContainer;
