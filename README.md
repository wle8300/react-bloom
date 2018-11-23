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

## License

MIT © [wle8300](https://github.com/wle8300)
