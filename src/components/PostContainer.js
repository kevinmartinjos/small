import React from 'react';
import FakeServer from '../FakeServer/FakeServer';
import Post from './Post';
import CommentContainer from './CommentContainer';
import InlineComment from './InlineComment';

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
	componentWillMount(){
		var id = this.props.routeParams.id;
		var post = this.getPost(id);
		this.setState({
			title: post.title,
			content: post.content
		});
	},
	componentDidMount(){
		if(this.state.inlineCommentProps.anchorNode)
			this.modifySelection();
	},
	getPost(id){
		var server = new FakeServer();
		return server.getPost(id);
	},
	getSelection(event){
		var selection = window.getSelection();
		var selectedText = selection.toString();

		if(selectedText.length !== 0) {
			this.setState({
				selectedText: selectedText,
				showInlineComment: true,
				inlineCommentProps: {
					x: event.clientX,
					y: event.clientY,
					anchorNode: selection.anchorNode,
					focusNode: selection.focusNode,
					anchorOffset: selection.anchorOffset,
					focusOffset: selection.focusOffset
				}
			});
		}
		else{
			this.setState({
				showInlineComment: false,
			});
		}
	},
	modifySelection(){
		if(this.state.showInlineComment){
			var anchorText = this.state.inlineCommentProps.anchorNode.textContent;
			console.log(this.state.inlineCommentProps.anchorNode.getBoundingClientRect().left);
		}
	},
	render() {
		return(
			<div className='PostContainer'>
				<Post title={this.state.title} content={this.state.content} handleSelection={this.getSelection}/>
				{this.state.showInlineComment &&
					<InlineComment x={this.state.inlineCommentProps.x}
						y={this.state.inlineCommentProps.y}
					/>
				}

				{this.modifySelection()}

				<CommentContainer postId={this.props.routeParams.id.toString()} />
			</div>
		);
	}
});

export default PostContainer;
