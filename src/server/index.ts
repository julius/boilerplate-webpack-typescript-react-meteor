///<reference path="../typings/tsd.d.ts" />

import collections = require('../shared/collections');
import fixtures = require('../shared/fixtures')

if (!collections.Posts.find().fetch().length) {
    fixtures.createPosts();
}

Meteor.methods({
    'sayHello': () => {
        return 'Hello from Meteor method!';
    },
});

console.log('\n\nRunning on server only');
console.log('There are # posts:', collections.Posts.find().fetch().length);
