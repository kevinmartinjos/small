import React from 'react';

var PropTypes = React.PropTypes;

var Comment = React.createClass({
	propTypes: {
		content: PropTypes.string.isRequired
	},
	render() {
		return( 
			<div className="Comment">
				{this.props.content}
			</div>
		);
	}
});

export default Comment;
