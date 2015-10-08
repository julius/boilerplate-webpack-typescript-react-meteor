import collections = require('./collections');

export function createPosts() {
    console.log('Creating fake posts');

    [1, 2].forEach((count) => {
        const post: collections.Post = {
            name: 'Test post # ' + count,
            description: 'How now brown cow',
        };

        collections.Posts.insert(post);
    });
}
