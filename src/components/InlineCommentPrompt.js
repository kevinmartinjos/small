import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import InlineCommentInputContainer from './InlineCommentInputContainer';
import '../styles/InlineCommentPrompt.css';

var PropTypes = React.PropTypes;

var InlineCommentPrompt = React.createClass({
	propTypes: {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		domId: PropTypes.string,
		submitHandlerCallback: PropTypes.func.isRequired,
		cancelCallback: PropTypes.func.isRequired
	},
	getInitialState(){
		return {
			style:{
				position: 'absolute',
				left: this.props.x,
				top: this.props.y,
			},
			prompt: true
		};
	},
	handlePromptClick(){
		this.setState({
			prompt: false
		});
	},
	storeCommentInputContainer(ref){
		this.commentInputContainer = ref;
	},
	render() {
		return(
			<div className="InlineCommentPrompt" ref="child" style={this.state.style}>
				{this.state.prompt ?
					(<Button className='makeComment' bsSize='lg' >
						<Glyphicon glyph="pencil" onClick={this.handlePromptClick}/>
					</Button>)
					:
					(
						<InlineCommentInputContainer
						domId={this.props.domId}
						submitHandlerCallback={this.props.submitHandlerCallback}
						cancelCallback={this.props.cancelCallback}
						ref={this.storeCommentInputContainer}
						/>)
				}
			</div>
		);
	}
});

export default InlineCommentPrompt;
