var db = {
	homePage: [1, 2, 3, 4],
	posts: {
		1: {
			id: 1,
			title: 'How Google builds web frameworks',
			preview: 'It’s public knowledge that Google uses a single repository to share code — all 2 billion lines of it …',
			content: `<p id="1486891456380">It’s <a href='http://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext'>public knowledge</a> that Google uses a single repository to share code — all 2 billion lines of it — and that it uses the trunk-based development paradigm.</p>
						<p id="1486891472468">For many developers outside the company, this is surprising and counterintuitive, but it works really well. (The article linked above gives good examples, so I won’t repeat them here.)</p>
						<h3 id="1486909266368">Only one version</h3>
						<p id="1486891481214">When you employ trunk-based development in a single huge repo, you have only one version of everything. That’s kind of obvious. It’s still good to point it out here, though, because it means that — at Google — you can’t have app FooBar that’s using AngularDart 2.2.1 and another app BarFoo that’s on 2.3.0. Both apps must be on the same version — the latest one.</p>
						<p id="1486891489647">That’s why Googlers sometimes say that all software at Google lives on the bleeding edge.
If your entire soul screams ‘dangerous!’ right now, that’s understandable. Depending on the trunk (‘master’ in git terminology) of a library with your production code sure sounds dangerous. But there’s a plot twist ahead.</p>
						<h3>74 thousand tests per commit</h3>
						<p id="1486891500074">AngularDart defines 1601 tests (here). But when you’re committing a change to AngularDart code in the Google repository, it also runs tests for everyone at Google who depends on the framework. At the moment, that’s about 74 thousand tests (depending on how big your change is — a heuristic skips tests that the system knows you’re not affecting).</p>
						`,
			recommendations: [2, 3, 4]
		},
		2: {
			id: 2,
			title: 'How Blockchain works, and how it powers Bitcoin',
			preview: '“Schrödinger’s Backup: the condition of any backup is unknown until a restore is attempted.” — Nixcraft',
			content: `<p id="1486909278859">Here are three links worth your time:</p>
						<ol>
							<li id="1486909287472">An interactive intro to Blockchain, the distributed database that powers Bitcoin <a href='http://bit.ly/2kzvjSc'>(18 minute watch)</a></li>
							<li id="1486909296699">Material Design and the Mystery Meat Navigation Problem (8 minute read)</li>
							<li id="1486909304135">The Right Way to Test React Components </li>
						</ol>
						<p id="1486909310459">Note: The bit.ly in the original medium.com article was not working. So did not bother to include links</p>`,
			recommendations: [3 ,1 , 4]

		},
		3: {
			id: 3,
			title: 'How it feels to learn JavaScript in 2016',
			preview: 'No JavaScript frameworks were created during the writing of this article',
			content: `<p id="1486909325325">No JavaScript frameworks were created during the writing of this article.</p>
					<p id="1486909331764"><i>The following is inspired by the article “It’s the future” from Circle CI. You can read the original <a href='https://circleci.com/blog/its-the-future/'>here</a>. This piece is just an opinion, and like any JavaScript framework, it shouldn’t be taken too seriously.</i></p>
					<p id="1486909342223">Hey, I got this new web project, but to be honest I haven’t coded much web in a few years and I’ve heard the landscape changed a bit. You are the most up-to date web dev around here right?</p>
					<p id="1486909349564"><i>-The actual term is Front End engineer, but yeah, I’m the right guy. I do web in 2016. Visualisations, music players, flying drones that play football, you name it. I just came back from JsConf and ReactConf, so I know the latest technologies to create web apps.
					</i></p>
					<p id="1486909356845">Cool. I need to create a page that displays the latest activity from the users, so I just need to get the data from the REST endpoint and display it in some sort of filterable table, and update it if anything changes in the server. I was thinking maybe using jQuery to fetch and display the data?</p>
					<p id="1486909364025"><i>-Oh my god no, no one uses jQuery anymore. You should try learning React, it’s 2016.</i></p>
					<p id="1486909370524">Oh, OK. What’s React?</p>
					<p id="1486909376200"><i>-It’s a super cool library made by some guys at Facebook, it really brings control and performance to your application, by allowing you to handle any view changes very easily.</i></p>
					<p id="1486909383125">That sounds neat. Can I use React to display data from the server?</p>
					<p id="1486909389132"><i>-Yeah, but first you need to add React and React DOM as a library in your webpage.</i></p>
					<p id="1486909395136"><i>This one's funny, so <a href='https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.t2lajnoa6'>click here</a> to read the whole thing - kevin.</i></p>
						`,
			recommendations: [2, 4, 1]
		},
		4: {
			id: 4,
			title: 'To Live & (Nearly) Die In Orange County',
			preview: 'Vacationing in the Land of Sun, Silicone & Subliminal Messages',
			content: `<p id="1486909407718">I like to think I’m a down-to-earth person. Others might replace “down-to-earth” with “pessimist”, but I’d argue I just have a practical, somewhat dark and comedic outlook. It’s who I am and how I cope with the devastation of having been born.</p>
					<p id="1486909415230">It also means I’m not big on showy, fake, synthetic shit. Which is why I should have had some inkling that my “pleasure” trip to sunny, Orange County California, wasn’t such a great idea. Orange County wasn’t built for people like me. Honestly, I’m beginning to think it was built to explicitly keep us (me) out.</p>
					<p id="1486909431647">A few years ago, in the middle of a very wet, gray, cold-as-fuck winter, my husband, Sherman, was invited to attend a conference in the infamous OC.
I was in the living room wearing my snowsuit, wrapped in my space blanket when he announced his impending trip. </p><p id="1486909750407">I immediately waddled over, removed my ski mask, kissed him on the cheek and whispered in his ear, <p id="1486909768053">“TAKE ME WITH YOU OR I SWEAR TO GOD, I’LL BURY ALL YOUR UNDERPANTS IN THE SNOW.”</p>
He seemed unmoved, so I tried again. “Okay, then I’ll make you re-read my blog posts! ALL OF THEM!”</p>
					`,
			recommendations: [2, 3, 1]
		}
	}
};

export default db;
