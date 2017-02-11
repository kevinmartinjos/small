import React from 'react';

var PropTypes = React.PropTypes;

var InlineComment = React.createClass({
	PropTypes: {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired
	},
	getInitialState(){
		return {
			style:{
				position: 'absolute',
				left: 0,
				top: 0,
				color: 'lightGreen'
			}
		};
	},
	componentDidMount(){
		this.setState({
			style: {
				position: 'absolute',
				left: this.props.x,
				top: this.props.y
			}
		});
	},
	render() {
		return(
			<div className="InlineComment" ref="child" style={this.state.style}>
				hello
			</div>
		);
	}
});

export default InlineComment;
