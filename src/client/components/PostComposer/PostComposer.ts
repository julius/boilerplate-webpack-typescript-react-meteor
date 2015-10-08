import React = require('react');
import $ = require('jquery');
import collections = require('../../../shared/collections');
import SyntheticEvent = React.SyntheticEvent;
import ReactComponent = React.Component;

export interface IProps {
}

interface IState {
}

interface ICSS { postComposer: string; }
const CSS: ICSS = require<ICSS>('./PostComposer.css');


export class Component extends ReactComponent<IProps, IState> {

    handleSubmit(event: SyntheticEvent) {
        event.preventDefault();

        const post: collections.Post = {
            name: $(React.findDOMNode(this.refs['name'])).val(),
            description: $(React.findDOMNode(this.refs['description'])).val(),
        };

        Meteor.call('addPost', post);

        $(React.findDOMNode(this.refs['name'])).val('');
        $(React.findDOMNode(this.refs['description'])).val('');
    }

    render() {
        return (
            React.DOM.div({ className: CSS.postComposer },

                React.DOM.h2(null, [ React.DOM.i({ className: 'fa fa-pencil' }), ' Create Post']),

                React.DOM.form({ onSubmit: this.handleSubmit.bind(this) }, [

                    React.DOM.div({ className: 'form-group' }, [
                        React.DOM.label({ htmlFor: 'composerName' }, 'Name'),
                        React.DOM.input({ id: 'composerName', ref: 'name', type: 'text', placeholder: 'Name', className:'form-control' }),
                    ]),

                    React.DOM.div({ className: 'form-group' }, [
                        React.DOM.label({ htmlFor: 'composerDescription' }, 'Description'),
                        React.DOM.input({ id: 'composerDescription', ref: 'description', type: 'text', placeholder: 'Description', className:'form-control' }),
                    ]),

                    React.DOM.input({ type: 'submit', value: 'Create Post', className:'form-control btn btn-primary' }),
                ])
            )
        );
    }
}
