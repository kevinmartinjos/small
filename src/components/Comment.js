import React from 'react';
import ReactHtmlParser from 'react-html-parser';

var PropTypes = React.PropTypes;

var Comment = React.createClass({
	propTypes: {
		content: PropTypes.string.isRequired,
		annotation: PropTypes.string
	},
	render() {
		return(
			<div className="Comment">
				{this.props.annotation &&
					<div>{this.props.annotation}</div>
				}
				{ReactHtmlParser(this.props.content)}
				
			</div>
		);
	}
});

export default Comment;
