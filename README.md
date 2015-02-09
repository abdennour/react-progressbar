react-progressbar
=================

Basic progress bar in React.js.

![Screenshot of progress bar](https://raw.githubusercontent.com/paramaggarwal/react-progressbar/master/screenshot.png)

Demo: http://paramaggarwal.github.io/react-progressbar/

Usage
=====

Simply `require('react-progressbar')` and pass in `completed` property as a number between 0 and 100.

You may additionally pass in a CSS color string for the `color` property.

```jsx

var Progress = require('react-progressbar');

var component = React.createClass({
  render: function() {
    return (
      <div>
        <Progress completed={75} />
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
