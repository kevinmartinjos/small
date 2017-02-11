import React from 'react';
import FakeServer from '../FakeServer/FakeServer';
import CommentInput from './CommentInput';
import Comment from './Comment';

var PropTypes = React.PropTypes;

var CommentContainer = React.createClass({
	propTypes: {
		postId: PropTypes.string.isRequired
	},
	getInitialState(){
		return {
			comments: []
		};
	},

	componentWillMount(){
		var comments = this.getPostComments(this.props.postId);
		this.setState({
			comments: comments
		});
	},
	getPostComments: function(postId){
		var server = new FakeServer();
		return server.getPostComments(postId);
	},
	refreshComments: function(){
		var server = new FakeServer();
		var comments = server.getPostComments(this.props.postId);
		this.setState({
			comments: comments
		});
	},
	render() {
		return(
			<div className="CommentContainer">
				<CommentInput postId={this.props.postId} submitCallback={this.refreshComments}/>
				{this.state.comments.map(function(comment){
					return <Comment key={comment.id} content={comment.content} annotation={comment.annotation}/>;
				})}
			</div>
		);
	}
});

export default CommentContainer;
