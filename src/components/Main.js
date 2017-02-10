import React from 'react';
import FakeServer from '../FakeServer/FakeServer';
import PostPreview from '../components/PostPreview';
import PostPreviewContainer from '../components/PostPreviewContainer';

var Main = React.createClass({
	getHomePage(){
		var server = new FakeServer();
		return server.getHomePageContent();
	},
	render() {
		return(
			<div className="Main">
				<PostPreviewContainer>
					{this.getHomePage().map(function(post){
						return <PostPreview key={post.id} id={post.id} title={post.title} previewText={post.preview} />;
					})}
				</PostPreviewContainer>
			</div>
		);
	}
});

export default Main;
