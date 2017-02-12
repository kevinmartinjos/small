import React from 'react';
import {Link} from 'react-router';
import '../styles/PostPreview.css';
import {Panel} from 'react-bootstrap';

var PropTypes = React.PropTypes;

var PostPreview = React.createClass({
	propTypes: {
		title: PropTypes.string.isRequired,
		previewText: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	},

	render() {
		return(
			<Panel className="PostPreview">
				<h3><Link className='title' to={'/posts/' + this.props.id}>{this.props.title}</Link></h3>
				<section>{this.props.previewText}</section>
			</Panel>
		);
	}
});

export default PostPreview;
