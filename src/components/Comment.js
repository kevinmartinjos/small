import React from 'react';

var PropTypes = React.PropTypes;

var Comment = React.createClass({
	propTypes: {
		content: PropTypes.string.isRequired
	},
	render() {
		return( 
			<div className="Comment">
				I am a comment
			</div>
		);
	}
});

export default Comment;
