import React from 'react';
import ReactHtmlParser from 'react-html-parser';

var PropTypes = React.PropTypes;

var Comment = React.createClass({
	propTypes: {
		content: PropTypes.string.isRequired
	},
	render() {
		return(
			<div className="Comment">
				{ReactHtmlParser(this.props.content)}
			</div>
		);
	}
});

export default Comment;
