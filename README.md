react-progressbar
=================

Basic progress bar in React.js.

![Screenshot of progress bar](https://raw.githubusercontent.com/paramaggarwal/react-progressbar/master/screenshot.png)

Try it out: [http://paramaggarwal.github.io/react-progressbar/](http://paramaggarwal.github.io/react-progressbar/)

Usage
=====

Simply `require()` the module and pass in `completed` property as a number between 0 and 100.

You may additionally pass in a CSS color string for the `color` property.

```jsx

var Progress = require('react-progressbar');

var component = React.createClass({
  render: function() {
    return (
      <div>
        <Progress completed={this.state.completed} />
      </div>
    );
  }
});
```

Author
======

Param Aggarwal (paramaggarwal@gmail.com)

License
=======

MIT
