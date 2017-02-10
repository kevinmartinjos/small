import React from 'react';
import FakeServer from '../FakeServer/FakeServer';
import CommentInput from './CommentInput';
import Comment from './Comment';

var PropTypes = React.PropTypes;

var CommentContainer = React.createClass({
	propTypes: {
		postid: PropTypes.string.isRequired
	},
	getInitialState(){
		return {
			comments: []
		}
	},
	getPostComments: function(postid){
		var server = new FakeServer();
		return server.getPostComments(postid);
	},
	refreshComments: function(){
		var server = new FakeServer();
		console.log('refreshed');
		var comments = server.getPostComments(this.props.postid);
		this.setState({
			comments: comments
		});
	},
	componentDidMount(){
		var comments = this.getPostComments(this.props.postid);
		this.setState({
			comments: comments
		});
	},
	render() {
		return( 
			<div className="CommentContainer">
				<CommentInput submitCallback={this.refreshComments}/>
				{this.state.comments.map(function(comment){
					return <Comment content={comment.content} />
				})}
			</div>
		);
	}
});

export default CommentContainer;
