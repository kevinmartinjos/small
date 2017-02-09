import db from './fakeDB'


function FakeServer(){
	return {
		getHomePageContent: function(){
			return db.homePage.map(function(id){
				return db.posts[id];
			});
		},
	}
}

export default FakeServer;