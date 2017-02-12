import db from './fakeDB';


function FakeServer(){
	function initLocalStorage(storage){
		var commentStore = storage.getItem('commentStore');
		commentStore = commentStore === undefined ? undefined : JSON.parse(commentStore);
		if(commentStore === undefined || commentStore === null){
			var obj = {
				allCommentsEverCount: 0
			};
			//allCommentsEverCount is a simple counter that we increment to generate comment ids
			//This would help generate a 'primary key' by which each comment would be referred with
			storage.setItem('commentStore', JSON.stringify(obj));
		}
	}

	function getLocalStorage(){
		if(window.localStorage === undefined){
			var localStorageMock = (function() {
				var store = {};
				return {
					getItem: function(key) {
						return store[key];
					},
					setItem: function(key, value) {
						store[key] = value.toString();
					},
					clear: function() {
						store = {};
					}
				};
			})();
			Object.defineProperty(window, 'localStorage', { value: localStorageMock });
		}

		var storage = window.localStorage;
		initLocalStorage(storage);
		return storage;
	}

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
			if(comments === undefined){
				comments = [];
			}
			return comments;
		},
		addPostComment: function(id, content, annotation, domId){
			var storage = getLocalStorage();
			var commentStore = JSON.parse(storage.getItem('commentStore'));
			var primaryKey = commentStore.allCommentsEverCount++;
			if(commentStore[id] === undefined){
				commentStore[id] = [];
			}
			commentStore[id].push({
				id: primaryKey,
				content: content,
				annotation: annotation,
				domId: domId
			});
			storage.setItem('commentStore', JSON.stringify(commentStore));
		}
	};
}

export default FakeServer;
