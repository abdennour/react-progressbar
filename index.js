/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var component = React.createClass({

  render: function() {

    var completed = +this.props.completed;
    if (completed < 0) {completed = 0};
    if (completed > 100) {completed = 100};

    var style = {
      backgroundColor: this.props.color || '#0BD318',
      width: completed + '%',
      transition: "width 200ms",
      height: this.props.height || 10
    };

    return (
      <div className="progressbar-container" >
        <div className="progressbar-progress" style={style}>{this.props.children}</div>
      </div>
    );
  }
});

module.exports = component;
