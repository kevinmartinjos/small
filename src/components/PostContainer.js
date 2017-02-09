import React, { Component } from 'react';
import {Link} from 'react-router';
import FakeServer from '../FakeServer/FakeServer';
import Post from './Post';

var PropTypes = React.PropTypes;

var PostContainer = React.createClass({
	getInitialState(){
		return {
			title: null,
			content: null
		}
	},
	getPost(id){
		var server = new FakeServer();
		return server.getPost(id);
	},
	componentDidMount(){
		var post = this.getPost(this.props.params.id);
		console.log('boo');
		console.log(post);
		this.setState({
			title: post.title,
			content: post.content
		});
	},
	render() {
		return( 
			<Post title={this.state.title} content={this.state.content} />
		);
	}
});

export default PostContainer;
