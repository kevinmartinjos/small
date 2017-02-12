import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Panel} from 'react-bootstrap';
import '../styles/Comment.css';

var PropTypes = React.PropTypes;

var Comment = React.createClass({
	propTypes: {
		content: PropTypes.string.isRequired,
		annotation: PropTypes.string
	},
	render() {
		return(
			<Panel className="Comment">
				{this.props.annotation &&
					<Panel className="annotation"><span>{this.props.annotation}</span></Panel>
				}
				<section className='content'>
					{ReactHtmlParser(this.props.content)}
				</section>
				
			</Panel>
		);
	}
});

export default Comment;
