import React, { Component } from 'react';
import {Link} from 'react-router';

var PropTypes = React.PropTypes;

var Post = React.createClass({
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
