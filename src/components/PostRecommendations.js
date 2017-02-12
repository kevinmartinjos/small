import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PostPreview from './PostPreview';

var PropTypes = React.PropTypes;

var PostRecommendations = React.createClass({
	propTypes: {
		posts: PropTypes.array.isRequired,
	},
	render() {
		return(
			<Row>
				<Col xs={12}>
					{this.props.posts.map(function(post){
						return(
						<Col xs={12} sm={12} md={4}>
							<PostPreview key={post.id} id={post.id} title={post.title} previewText={post.preview} />
						</Col>
						)
					})}
				</Col>
			</Row>
		);
	}
});

export default PostRecommendations;
