# react-progressbar

[![Build Status](https://travis-ci.org/abdennour/react-progressbar.svg?branch=master)](https://travis-ci.org/abdennour/react-progressbar)
[![Coverage Status](https://coveralls.io/repos/github/abdennour/react-progressbar/badge.svg?branch=master)](https://coveralls.io/github/abdennour/react-progressbar?branch=master)
[![Downloads](http://img.shields.io/npm/dm/react-progressbar.svg)](https://npmjs.org/package/react-progressbar)



Basic progress bar in React.js.

![Screenshot of progress bar](https://raw.githubusercontent.com/abdennour/react-progressbar/master/screenshot.png)

Demo: http://abdennour.github.io/react-progressbar/

# Usage



Simply `require('react-progressbar')` and pass in `completed` property as a number between 0 and 100.

You may additionally pass in a CSS color string for the `color` property.

```js

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

it was "babelified" also , thus, the following syntax is supported :

```js

import Progress from 'react-progressbar';

class OtherComponent extends React.Component {
  render () {
    return (
      <div>
        <Progress completed={75} />
      </div>
    )
  }
}
```



# Donation

If this project help you reduce time to develop, you can give me a cup of coffee 🍵 :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.me/AbdennourT/1)
