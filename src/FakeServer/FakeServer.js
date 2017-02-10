import db from './fakeDB'


function FakeServer(){
	function initLocalStorage(storage){
		var commentStore = JSON.parse(storage.getItem('commentStore'));
		if(commentStore === undefined || commentStore === null){
			var obj = {
				allCommentsEverCount: 0
			}
			//allCommentsEverCount is a simple counter that we increment to generate comment ids
			//This would help generate a 'primary key' by which each comment would be referred with
			storage.setItem('commentStore', JSON.stringify(obj));
		}
	};

	function getLocalStorage(){
		var storage = window.localStorage;
		initLocalStorage(storage);
		return storage;	
	};

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
			var storage = getLocalStorage();
			var commentStore = JSON.parse(storage.getItem('commentStore'));
			var comments = commentStore[id];
			if(comments === undefined)
				comments = [];
			return comments;
			
		},
		addPostComment: function(id, content){
			var storage = getLocalStorage();
			var commentStore = JSON.parse(storage.getItem('commentStore'));
			var primaryKey = commentStore.allCommentsEverCount++;
			if(commentStore[id] === undefined)
				commentStore[id] = [];
			commentStore[id].push({
				id: primaryKey,
				content: content
			});
			console.log(commentStore);
			storage.setItem('commentStore', JSON.stringify(commentStore));
		}
	}
}

export default FakeServer;