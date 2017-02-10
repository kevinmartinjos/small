import React from 'react';
import FakeServer from '../FakeServer/FakeServer';
import Post from './Post';
import CommentContainer from './CommentContainer';

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
		var id = this.props.routeParams.id;
		var post = this.getPost(id);
		this.setState({
			title: post.title,
			content: post.content
		});
	},
	render() {
		return( 
			<div className='PostContainer'>
				<Post title={this.state.title} content={this.state.content} />
				<CommentContainer postid={this.props.routeParams.id} />
			</div>
		);
	}
});

export default PostContainer;