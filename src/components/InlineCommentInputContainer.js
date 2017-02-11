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
		postId: PropTypes.string
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
		server.addPostComment(this.context.postId, this.state.value);
		this.props.submitHandlerCallback();
		this.setState(this.getDefaultState());
		event.preventDefault();
	},
	handleChange(event){
		this.setState({value: event.target.value});
	},
	render() {
		return(
			<div className="InlineCommentInputContainer">
				<form onSubmit={this.submitHandler}>
					<textarea onChange={this.handleChange}/>
					<Button bsSize='sm' type='submit'>Submit</Button>
					<Button bsSize='sm' onClick={this.props.cancelCallback}>cancel</Button>
				</form>
			</div>
		);
	}
});

export default InlineCommentInputContainer;
