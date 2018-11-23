# react-bloom

>

[![NPM](https://img.shields.io/npm/v/react-bloom.svg)](https://www.npmjs.com/package/react-bloom) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![screenshot](screenshot.gif)

React component that gives you a "blooming" effect when you click/tap. Easy to use, and customize.

## Demo

https://wle8300.github.io/react-bloom

## Install

```bash
npm install --save react-bloom
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactBloom from 'react-bloom'

class Example extends Component {
  render () {
    return (
      <Foo>
        <ReactBloom
          bloomSize={75}
          backgroundColor="#5ebfff"
          opacity={0.3}
        />
      </Foo>
    )
  }
}
```

## API

- __bloomSize__ [PropTypes.number] Pixel units. Default `100`
- __animationMs__ [PropTypes.number] Milliseconds for bloom expansion
- __disappearCompound__ [PropTypes.number] Multiplier for fade. If "animationMs" is 850ms, and "disappearCompound" is 2, the fadeaway duration will be 1700ms
- __backgroundColor__ [PropTypes.string] Takes standard web color strings (ex: hex, rgba, hsl, etc)
- __opacity__ [PropTypes.number] The opacity of the bloom. Default is `0.5`
- __transitionTiming__ [PropTypes.string] Like "linear", "cubic-bezier(0.215, 0.61, 0.355, 1)", "ease-in", etc. Default is "cubic-bezier(0.215, 0.61, 0.355, 1)"
- __style__ [PropTypes.object] Standard React style objects

## License

MIT © [wle8300](https://github.com/wle8300)
