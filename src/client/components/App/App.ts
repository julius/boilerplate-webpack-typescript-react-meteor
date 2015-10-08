/// <reference path="./App.d.ts" />

import React = require('react');
import reactMixin = require('react-mixin');
import collections = require('../../../shared/collections');
import BlazeTemplate = require('./../BlazeTemplate/BlazeTemplate');
import Post = require('./../Post/Post');
import PostComposer = require('./../PostComposer/PostComposer');
import ReactComponent = React.Component;

export interface IProps {
}

interface IState {
}

interface IData {
    users: Array<Meteor.User>;
    posts: Array<collections.Post>;
}

interface ICSS { app: string; }
const CSS: ICSS = require<ICSS>('./App.css');


export class Component extends ReactComponent<IProps, IState> {

    data: IData;

    getMeteorData(): IData {
        return {
            users: collections.Users.find().fetch(),
            posts: collections.Posts.find().fetch(),
        };
    }

    render() {
        return (
            React.DOM.div({ className: CSS.app }, [

                React.createElement<BlazeTemplate.BlazeTemplateProps>(
                    BlazeTemplate.BlazeTemplateComponent, {
                        template: Template.loginButtons,
                        component: 'any',
                    }),

                React.DOM.h1(null, 'Posts'),

                React.DOM.div({ className: 'post-list' },
                    this.data.posts.map((post, i) => React.createElement<Post.IProps>(Post.Component, { post: post, key: i }))
                ),

                React.createElement<PostComposer.IProps>(PostComposer.Component, {}),
            ])
        );
    }
}

reactMixin(Component.prototype, ReactMeteorData);