import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PostPreview from './PostPreview';
import FakeServer from '../FakeServer/FakeServer';
import '../styles/PostRecommendations.css';

var PropTypes = React.PropTypes;

var PostRecommendations = React.createClass({
	propTypes: {
		recommendations: PropTypes.array.isRequired,
	},
	getInitialState(){
		var server = new FakeServer();
		var recommendations = this.props.recommendations.map(function(id){
			return server.getPost(id);
		});
		return {
			recommendations: recommendations
		};
	},

	/*
		Same story as in PostContainer.js. Props changed, but not state. Forcing re-render.
	*/
	componentWillUpdate(nextProps){
		var a = this.props.recommendations;
		var b = nextProps.recommendations;
		if(a.length !== b.length){
			this.setState({
				recommendations: nextProps.recommendations
			});
		}
		else{
			var server = new FakeServer();
			var getPost = function(id){
				return server.getPost(id);
			};

			for(var i = 0; i < a.length; i++){
				if(a[i] !== b[i]){
					this.setState({
						recommendations: nextProps.recommendations.map(getPost)
					});
					return;
				}
			}
		}
	},
	render() {
		return(
			<Row className='PostRecommendations'>
				<Col xs={12}>
					<h2 className='recommendations-title'>More</h2>
					{this.state.recommendations.map(function(post){
						return(
						<Col key={post.id} xs={12} sm={12} md={4} className='no-padding'>
							<PostPreview id={post.id} title={post.title} previewText={post.preview} />
						</Col>
						);
					})}
				</Col>
			</Row>
		);
	}
});

export default PostRecommendations;
