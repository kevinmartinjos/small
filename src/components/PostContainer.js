import React from 'react';
import FakeServer from '../FakeServer/FakeServer';
import Post from './Post';
import CommentContainer from './CommentContainer';
import InlineCommentPrompt from './InlineCommentPrompt';

var PropTypes = React.PropTypes;

var PostContainer = React.createClass({
	getInitialState(){
		return {
			title: '',
			content: '',
			selectedText: '',
			showInlineComment: false,
			inlineCommentProps: {
				x: undefined
			}
		};
	},
	getChildContext() {
		return {
			postId: this.props.routeParams.id
		};
	},
	childContextTypes: {
		postId: PropTypes.string
	},
	componentWillMount(){
		var id = this.props.routeParams.id;
		var post = this.getPost(id);
		this.setState({
			title: post.title,
			content: post.content
		});
	},
	getPost(id){
		var server = new FakeServer();
		return server.getPost(id);
	},

	/*	getSelection needs to be passed all the way down to Post.js
		why?
		Trying to play cool and seperate 'handlers' from the 'presentational' components
	*/
	getSelection(){
		var selection = window.getSelection();
		var selectedText = selection.toString();
		if(selectedText.length !== 0) {
			//TODO: Be mroe defensive here. What if there is more than 1 range?
			//getClientRects is the de facto way to get position of a DOM node
			var rect = selection.getRangeAt(0).getClientRects()[0];
			this.setState({
				selectedText: selectedText,
				//show the small hovering comment button
				showInlineComment: true,
				inlineCommentProps: {
					x: rect.right,
					y: rect.top,
				}
			});
		}
		else{
			this.setState({
				showInlineComment: false,
			});
		}
	},

	/*
		Should be problably using redux here instead of passing the
		below function all the way down.
	*/
	inlineCommentSubmitHandler(){
		this.commentContainer.refreshComments();
		this.setState({
			showInlineComment: false
		});
	},
	/*If the inline comment input box is canceled, we should not even
	show the inlineCommentPrompt anymore - i.e the small hovering prompt
	button too should disappear*/
	inlineCommentCancel(){
		this.setState({
			showInlineComment: false
		});
	},
	storeCommentComponent(ref){
		this.commentContainer = ref;
	},
	render() {
		return(
			<div className='PostContainer'>
				<Post title={this.state.title} content={this.state.content} handleSelection={this.getSelection}	/>
				{this.state.showInlineComment &&
					<InlineCommentPrompt x={this.state.inlineCommentProps.x}
						y={this.state.inlineCommentProps.y}
						submitHandlerCallback={this.inlineCommentSubmitHandler}
						cancelCallback={this.inlineCommentCancel}
					/>
				}

				<CommentContainer ref={this.storeCommentComponent} postId={this.props.routeParams.id.toString()} />
			</div>
		);
	}
});

export default PostContainer;
