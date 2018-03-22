import React from 'react';
import PropTypes from 'prop-types';

class Progress extends React.Component {
  state = {
    completed: 0, // Animation should always start from 0
  };

  static propTypes = {
    completed: (props, propName) => {
      if (typeof props[propName] !== 'number')
        return Progress.throwError('Invalid Props: "completed" should ∈ ℝ ');
      if (props[propName] < 0 || props[propName] > 100) {
        return Progress.throwError('Invalid Props: "completed" should be between 0 and 100');
      }
    },
    color: PropTypes.string,
    animation: PropTypes.number,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    completed: 0,
    color: '#0BD318',
    animation: 200,
    height: 10,
  };

  static throwError() {
    return new Error(...arguments);
  }

  componentDidMount() {
    this.updateCompletedDelayed(this.props.completed, this.props.animation);
  }

  componentWillReceiveProps(props) {
    if (props.completed !== this.state.completed) {
      this.updateCompletedDelayed(props.completed, props.animation);
    }
  }

  updateCompletedDelayed(completed, animationDelay) {
    setTimeout(() => this.setState({completed}), animationDelay);
  }

  render() {
    const {color, animation, height, completed: _, className, children, ...rest} = this.props;
    const {completed} = this.state;
    const style = {
      backgroundColor: color,
      width: completed + '%',
      transition: `width ${animation}ms`,
      height: height,
    };

    return (
      <div className={className || 'progressbar-container'} {...rest}>
        <div className="progressbar-progress" style={style}>
          {children}
        </div>
      </div>
    );
  }
}

export default Progress;
