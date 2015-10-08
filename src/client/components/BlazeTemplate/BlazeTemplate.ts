import React = require('react');
import collections = require('../../../shared/collections');

export interface BlazeTemplateProps {
    template: any;
    component: any;
}

export interface BlazeTemplateState {

}

interface BlazeTemplateRefs {
    root: React.Component<any, any>;
}

export class BlazeTemplateComponent extends React.Component<BlazeTemplateProps, BlazeTemplateState> {

    props: BlazeTemplateProps; state: BlazeTemplateState;
    refs: { [key: string]: React.Component<any, any>; };
    view: Blaze.View;

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        const template = this.props.template;
        this.view = Blaze.render(template, React.findDOMNode(this.refs['root']));
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        const component = this.props.component;
        const props = {
            template: this.props.template,
            ref: 'root',
        };

        return React.createElement(component, props);
    }
}

