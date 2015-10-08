///<reference path="../typings/tsd.d.ts" />

import React = require('react');
import $ = require('jquery');
import App = require('./components/App/App');

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/scss/font-awesome.scss');

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});

console.log('Running on client only');

Meteor.startup(() => {
    React.render(
        React.createElement<App.IProps>(App.Component, {}),
        document.getElementById('root'));
});

