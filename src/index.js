import React, {Component} from 'react'
import PropTypes from 'prop-types'
import calcCoords from 'recursive-calc-element-coords'

class ReactBloom extends Component {
  constructor(props) {

    super(props)

    this._bloomContainer = null
    this._debloomTimeout = null
    this.state = {
      bloomPhase: 'hidden', // 'hidden, staging, blooming, resetting'
      x: 0,
      y: 0
    }
    this.handleEngageButton = this.handleEngageButton.bind(this)
    this.handleDisengageButton = this.handleDisengageButton.bind(this)
    this.ignoreContextMenu = this.ignoreContextMenu.bind(this)
    this.$1804017614722 = this.$1804017614722.bind(this)
    this.$3466133276696 = this.$3466133276696.bind(this)
  }
  render() {

    const isTouchCapable = 'ontouchstart' in window || navigator.msMaxTouchPoints

    if (isTouchCapable) return (
      <div
        ref={(ref) => this._bloomContainer = ref}
        onTouchStart={this.handleEngageButton}
        onTouchEnd={this.handleDisengageButton}
        onTouchCancel={this.handleDisengageButton}
        // onTouchMove={this.handleDisengageButton}
        onContextMenu={this.ignoreContextMenu}
        style={this.$1804017614722()}
      >
        <div style={this.$3466133276696()}/>
      </div>
    )
    else return (
      <div
        ref={(ref) => this._bloomContainer = ref}
        onMouseDown={this.handleEngageButton}
        onMouseUp={this.handleDisengageButton}
        onContextMenu={this.ignoreContextMenu}
        style={this.$1804017614722()}
      >
        <div style={this.$3466133276696()}/>
      </div>
    )
  }
  handleEngageButton(e) {

    const containerCoords = calcCoords(this._bloomContainer)
    const hotX = e.changedTouches
      ? e.changedTouches[0].pageX
      : e.pageX
    const hotY = e.changedTouches
      ? e.changedTouches[0].pageY
      : e.pageY
    const x = hotX - containerCoords.x
    const y = hotY - containerCoords.y

    // console.log('Object.keys(this._bloomContainer)', Object.keys(this._bloomContainer));
    // console.log('containerCoords.x, containerCoords.y', containerCoords.x, containerCoords.y);
    // console.log('hotX, hotY', hotX, hotY);
    // console.log('x, y', x, y);

    clearTimeout(this._debloomTimeout)

    requestAnimationFrame(() => {

      this.setState({bloomPhase: 'hidden', x: x, y: y})

      requestAnimationFrame(() => this.setState({bloomPhase: 'blooming'}))
    })
  }
  handleDisengageButton() {

    this.setState({bloomPhase: 'resetting'})

    this._debloomTimeout = setTimeout(() => {

      this.setState({bloomPhase: 'hidden'})
    }, this.props.animationMs * this.props.disappearCompound)
  }
  ignoreContextMenu(e) {
    e.preventDefault()
  }
  $1804017614722() {

    const defaultStyle = {
      position: 'relative',
      width: '100%',
      height: '100%',
      cursor: 'pointer',
      outline: 'none',
      userSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      WebkitTouchCallout: 'none',
      WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none'
    }

    return Object.assign(
      {},
      defaultStyle,
      this.props.style
    )
  }
  $3466133276696() {

    const calcTransform = () => {

      switch (this.state.bloomPhase) {
        case 'hidden':
          return 'none'
        case 'staging':
          return 'none'
        case 'blooming':
          return `translateX(-${this.props.bloomSize}px) translateY(-${this.props.bloomSize}px)`
        case 'resetting':
          return `translateX(-${this.props.bloomSize}px) translateY(-${this.props.bloomSize}px)`
        default:
          return 'hidden'
      }
    }

    const calcPadding = () => {

      switch (this.state.bloomPhase) {
        case 'hidden':
          return 0
        case 'staging':
          return 0
        case 'blooming':
          return this.props.bloomSize
        case 'resetting':
          return this.props.bloomSize
        default:
          return 0
      }
    }

    const calcTransition = () => {

      switch (this.state.bloomPhase) {
        case 'hidden':
          return 'none'
        case 'staging':
          return 'none'
        case 'blooming':
          return `transform ${this.props.animationMs}ms ${this.props.transitionTiming}, padding ${this.props.animationMs}ms ${this.props.transitionTiming}, opacity ${this.props.animationMs}ms ${this.props.transitionTiming}`
        case 'resetting':
          // use "disappearCompound" to slow reset animation
          return `transform ${this.props.animationMs * this.props.disappearCompound}ms ${this.props.transitionTiming}, padding ${this.props.animationMs * this.props.disappearCompound}ms ${this.props.transitionTiming}, opacity ${this.props.animationMs * this.props.disappearCompound}ms ${this.props.transitionTiming}`
        default:
          return 'none'
      }
    }

    const calcOpacity = () => {

      switch (this.state.bloomPhase) {
        case 'hidden':
          return 0
        case 'staging':
          return this.props.opacity
        case 'blooming':
          return this.props.opacity
        case 'resetting':
          return 0
        default:
          return 0
      }
    }

    return {
      position: 'absolute',
      left: this.state.x,
      top: this.state.y,
      padding: calcPadding(),
      transform: calcTransform(),
      width: 0,
      height: 0,
      backgroundColor: this.props.backgroundColor,
      opacity: calcOpacity(),
      borderRadius: '100%',
      transition: calcTransition(),
      filter: this.props.filter,
      WebKitFilter: this.props.filter,
    }
  }
}

ReactBloom.propTypes = {
  style: PropTypes.object,
  bloomSize: PropTypes.number,
  transitionTiming: PropTypes.string,
  animationMs: PropTypes.number,
  disappearCompound: PropTypes.number,
  backgroundColor: PropTypes.string,
  opacity: PropTypes.number
}

ReactBloom.defaultProps = {
  style: {},
  bloomSize: 100,
  transitionTiming: 'cubic-bezier(0.215, 0.61, 0.355, 1)', // "easeOutCubic"
  animationMs: 250,
  disappearCompound: 5,
  backgroundColor: 'black',
  opacity: 0.5,
  filter: 'none',
}

export default ReactBloom
