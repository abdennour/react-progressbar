import React from 'react';

const PropTypes = {
  completed: React.PropTypes.number,
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

  get completed() {
    if (this.props.completed < 0) return 0 ;
    if (this.props.completed > 100) return 100 ;
    return this.props.completed;
  }

  render () {
    const {color, height, children, ...rest} = this.props;
    const style = {
      backgroundColor: color,
      width: this.completed + '%',
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
