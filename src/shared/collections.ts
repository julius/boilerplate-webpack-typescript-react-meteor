
export interface Post {
    name: string;
    description: string;
}

export const Users = Meteor.users;
export const Posts: Mongo.Collection<Post> = new Mongo.Collection<Post>('posts');


if (Meteor.isServer) {
    Meteor.publish('posts', () => {
        return Posts.find();
    });

    Meteor.methods({
        'addPost': (post: Post) => {
            Posts.insert(post);
        }
    });
}

if (Meteor.isClient) {
    Meteor.subscribe('posts');
}