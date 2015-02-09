/** @jsx React.DOM */
var React = require('react');
var ProgressBar = require('../');

var ProgressBarDemo = React.createClass({
    getInitialState: function () {
      return {
        completed: 0
      };
    },

    componentDidMount: function () {
      var self = this;

      var id = window.setInterval(function () {
        var diff = Math.random() * 10;

        self.setState({
          completed: self.state.completed + diff
        });

        if (self.state.completed > 100) {
          window.clearInterval(id);
        };
      }, 1000);
    },

    render: function () {
      return (
        <div>
          <h1>react-progressbar</h1>
          <a href='http://paramaggarwal.github.io/react-progressbar/'>{'http://paramaggarwal.github.io/react-progressbar/'}</a>
          <br /><br />
          
          <ProgressBar completed={this.state.completed} />
        </div>
      );
    }
});

React.render(<ProgressBarDemo />, document.body);

module.exports = ProgressBarDemo;