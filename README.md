##Small

Small is a very limited medium.com clone built using ReactJS

See a live [demo](http://lonesword.in/small)

###Medium-like comments

  1. Annotated comments. Select a blob of text to comment on it - not availbe on touch devices
  2. Click on the annotation on a comment to scroll that portion of port into view

###Storage

Fake data populated in src/FakeServer/FakeDB.js

Comments are stored in browser local storage.


###To build

  1. npm install
  2. npm start - runs a local server
  3. npm test - runs the tests. [Jest](https://facebook.github.io/jest/) in the test runner
  4. npm run build - production build.