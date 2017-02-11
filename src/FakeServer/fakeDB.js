var db = {
	homePage: [1, 2, 3, 4],
	posts: {
		1: {
			id: 1,
			title: 'Test post',
			preview: 'I am just a test post',
			content: `<p>Hi I'm a test line</p>
					<p><span>And I am a span </span>
					<b>and I am written in bold</p></b>`						
		},
		2: {
			id: 2,
			title: 'Test post',
			preview: 'I am just a test post',
			content: 'I am just a test post. Don\'t judge me'
		},
		3: {
			id: 3,
			title: 'You know nothing jon snow',
			preview: 'I am just a test post',
			content: 'I am just a test post. Don\'t judge me'
		},
		4: {
			id: 4,
			title: 'Test post',
			preview: 'I am just a test post',
			content: 'I am just a test post. Don\'t judge me'
		}
	}
};

export default db;
