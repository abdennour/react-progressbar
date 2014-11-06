/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var component = React.createClass({
    displayName: 'component',
    render: function () {

        var containerStyle = {
            height: '10px'
        };

        var progressStyle = {
            backgroundColor: this.props.color || '#0BD318',
            width: ((this.props.completed.match(/\d+/)) ? this.props.completed : 0) + '%',
            transition: 'width 200ms',
            height: '10px'
        };

        return (
            React.createElement('div', {className: 'progressbar-container', style: containerStyle},
                React.createElement('div', {className: 'progressbar-progress', style: progressStyle}
                )
            )
        );
    }
});

module.exports = component;
