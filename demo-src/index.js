import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from '../';

class ProgressBarDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    var id = window.setInterval(() => {
      var diff = Math.random() * 10;

      this.setState({
        completed: Math.min(this.state.completed + diff, 100),
      });

      if (this.state.completed >= 100) {
        window.clearInterval(id);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>react-progressbar</h1>
        <br />
        <br />
        <ProgressBar completed={this.state.completed} />
      </div>
    );
  }
}
ReactDOM.render(<ProgressBarDemo />, document.getElementById('demo'));
