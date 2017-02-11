import React from 'react';
import FakeServer from '../FakeServer/FakeServer';
import PostPreview from '../components/PostPreview';
import PostPreviewContainer from '../components/PostPreviewContainer';
import {Row, Col} from 'react-bootstrap';

var Main = React.createClass({
	getHomePage(){
		var server = new FakeServer();
		return server.getHomePageContent();
	},
	render() {
		return(
			<Row>
				<Col xs={12}>
					<div className="Main">
						<PostPreviewContainer>
							{this.getHomePage().map(function(post){
								return <PostPreview key={post.id} id={post.id} title={post.title} previewText={post.preview} />;
							})}
						</PostPreviewContainer>
					</div>
				</Col>
			</Row>
		);
	}
});

export default Main;
