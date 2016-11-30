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

  render () {
    const {color, completed, height, children, ...rest} = this.props;
    const style = {
      backgroundColor: color,
      width: completed + '%',
      transition: "width 200ms",
      height: height
    };

    return (
      <div className="progressbar-container">
        <div className="progressbar-progress" style={style}>{children}</div>
      </div>
    );
  }
};

Progress.propTypes = PropTypes;
Progress.defaultProps = defaultProps;

export default Progress;
