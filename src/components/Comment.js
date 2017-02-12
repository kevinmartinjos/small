import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Panel} from 'react-bootstrap';
import '../styles/Comment.css';

var PropTypes = React.PropTypes;

var Comment = React.createClass({
	propTypes: {
		content: PropTypes.string.isRequired,
		annotation: PropTypes.string,
		domId: PropTypes.string,
		handleAnnotationClick: PropTypes.func
	},
	handleAnnotationClick: function(){
		this.props.handleAnnotationClick(this.props.domId);
	},
	render() {
		return(
			<Panel className="Comment">
				{this.props.annotation &&
					<a onClick={this.handleAnnotationClick}>
						<Panel className="annotation">
								<span>{this.props.annotation}</span>
						</Panel>
					</a>
				}
				<section className='content'>
					{ReactHtmlParser(this.props.content)}
				</section>
			</Panel>
		);
	}
});

export default Comment;
