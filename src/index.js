var React = require('react');

const defaultProps = {
  completed: 0,
  color: '#0BD318',
  height: 10
};

const PropTypes = {
   completed: React.PropTypes.oneOf(...Array.from({length:100}, (v, k)=> k+1)) ,
   color: React.PropTypes.string,
   height: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
}
class Progress extends React.Component {

  preventOutOfRange(completed) {
     if (completed < 0) return 0 ;
     if (completed > 100) return 100;
     return  completed;
  }
  render() {

    let completed = +this.props.completed;
    completed = this.preventOutOfRange(completed);

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
Progress.defaultProps= defaultProps;

export default Progress ;
