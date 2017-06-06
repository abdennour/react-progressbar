import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  completed: ((props, propName) => {
    if (typeof props[propName] !== 'number')
      return Progress.throwError('Invalid Props: "completed" should ∈ ℝ ');
    if( props[propName] < 0 || props[propName] > 100) {
      return Progress.throwError('Invalid Props: "completed" should be between 0 and 100' );
    }
  }),
  color: PropTypes.string,
  animation: PropTypes.number,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

const defaultProps = {
  completed: 0,
  color: '#0BD318',
  animation: 200,
  height: 10
};

class Progress extends React.Component {

  render () {
    const {color, completed, animation, height, className, children, ...rest} = this.props;
    const style = {
      backgroundColor: color,
      width: completed + '%',
      transition: `width ${animation}ms`,
      height: height
    };

    return (
      <div className={className || "progressbar-container"} {...rest}>
        <div className="progressbar-progress" style={style}>{children}</div>
      </div>
    );
  }
};

Progress.propTypes = propTypes;
Progress.throwError = function() {
  return new Error(...arguments);
};
Progress.defaultProps = defaultProps;

export default Progress;
