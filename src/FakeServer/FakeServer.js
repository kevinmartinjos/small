import db from './fakeDB'


function FakeServer(){
	return {
		getHomePageContent: function(){
			return db.homePage.map(function(id){
				return db.posts[id];
			});
		},
		getPost: function(id){
			return db.posts[id];
		},
		getPostComments: function(id){
			return [];
		}
	}
}

export default FakeServer;