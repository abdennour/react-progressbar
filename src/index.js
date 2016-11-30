import React from 'react';

const PropTypes = {
  completed: React.PropTypes.oneOf(Array.from({
    length: 101
  }, (v, k) => k )),
  color: React.PropTypes.string,
  height: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

const defaultProps = {
  completed: 0,
  color: '#0BD318',
  height: 10
};

class Progress extends React.Component {

  preventOutOfRange (completed) {
    if (completed < 0) return 0;
    if (completed > 100) return 100;
    return completed;
  }

  render () {
    const completed = this.preventOutOfRange(this.props.completed);
    const style = {
      backgroundColor: this.props.color,
      width: completed + '%',
      transition: "width 200ms",
      height: this.props.height
    };

    return (
      <div className="progressbar-container">
        <div className="progressbar-progress" style={style}>{this.props.children}</div>
      </div>
    );
  }
};

Progress.propTypes = PropTypes;
Progress.defaultProps = defaultProps;

export default Progress;
