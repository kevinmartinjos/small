import React from 'react';
import {Button} from 'react-bootstrap';
var CommentInput = React.createClass({
	getInitialState(){
		return {
			value: ""
		}
	},
	handleSubmit(event){
		console.log("Submitting: " + this.state.value);
		this.props.submitCallback();
		event.preventDefault();
	},
	handleChange(event){
		this.setState({value: event.target.value});
	},
	render() {
		return( 
			<div className="CommentInput">
				<form onSubmit={this.handleSubmit}>
					<textarea value={this.state.value}
					 onChange={this.handleChange}></textarea>
					 <Button type='submit' bsStyle='primary'>Submit</Button>
				</form>
			</div>
		);
	}
});

export default CommentInput;
