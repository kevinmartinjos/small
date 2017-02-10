import React from 'react';


var PostPreviewContainer = React.createClass({
	render() {
		return(
			<div>
			{this.props.children}
			</div>
		);
	}
});

export default PostPreviewContainer;
