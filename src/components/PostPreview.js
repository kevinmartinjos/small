import React from 'react';
import {Link} from 'react-router';

var PropTypes = React.PropTypes;

var PostPreview = React.createClass({
	propTypes: {
		title: PropTypes.string.isRequired,
		previewText: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	},

	render() {
		return(
			<div className="PostPreview">
				<h3><Link to={'/posts/' + this.props.id}>{this.props.title}</Link></h3>
				<section>{this.props.previewText}</section>
			</div>
		);
	}
});

export default PostPreview;
