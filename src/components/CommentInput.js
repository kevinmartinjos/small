import React from 'react';
import {Button} from 'react-bootstrap';
import FakeServer from '../FakeServer/FakeServer';

var PropTypes = React.PropTypes;

var CommentInput = React.createClass({
	propTypes: {
		submitCallback: PropTypes.func.isRequired,
		postId: PropTypes.string.isRequired
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
	handleSubmit(event){
		var server = new FakeServer();
		server.addPostComment(this.props.postId, this.state.value);
		this.props.submitCallback();
		this.setState(this.getDefaultState());
		event.preventDefault();
	},
	handleChange(event){
		this.setState({value: event.target.value});
	},
	render() {
		return(
			<div className="CommentInput">
				<form onSubmit={this.handleSubmit}>
					<div>
					<textarea value={this.state.value}
						onChange={this.handleChange}
					/>
					</div>
					<Button bsSize='sm' type='submit' bsStyle='primary'>Submit</Button>
				</form>
			</div>
		);
	}
});

export default CommentInput;
