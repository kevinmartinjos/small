import React from 'react';
import {Button} from 'react-bootstrap';
import FakeServer from '../FakeServer/FakeServer';

var PropTypes = React.PropTypes;

var InlineCommentInputContainer = React.createClass({
	propTypes: {
		submitHandlerCallback: PropTypes.func.isRequired,
		cancelCallback: PropTypes.func.isRequired
	},
	contextTypes: {
		postId: PropTypes.string,
		selectedText: PropTypes.string
	},
	getInitialState(){
		return {
			value: ''
		};
	},
	getDefaultState(){
		return {
			value: ''
		};
	},
	submitHandler(event){
		var server = new FakeServer();
		server.addPostComment(this.context.postId, this.state.value, this.context.selectedText);
		this.props.submitHandlerCallback();
		this.setState(this.getDefaultState());
		event.preventDefault();
	},
	handleChange(event){
		console.log(this.context.selectedText);
		this.setState({value: event.target.value});
	},
	handleCancel(){
		this.props.cancelCallback();
	},
	render() {
		return(
			<div className="InlineCommentInputContainer">
				<div>
					{this.context.selectedText}
				</div>
				<form onSubmit={this.submitHandler}>
					<div>
						<textarea onChange={this.handleChange}/>
					</div>
					<Button bsSize='sm' type='submit'>Submit</Button>
					<Button bsSize='sm' onClick={this.handleCancel}>cancel</Button>
				</form>
			</div>
		);
	}
});

export default InlineCommentInputContainer;
