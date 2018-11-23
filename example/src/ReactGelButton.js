import PropTypes from 'prop-types'
import React, {Component} from 'react'

class ReactGelButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      buttonMode: 'unengaged'
    }
  }
  render() {
    return (
      <div style={this.$4609523218411()}
        onMouseDown={this.handleClick}
        onMouseOver={() => this.setState({buttonMode: 'hovered'})}
        onMouseOut={() => this.setState({buttonMode: 'unhovered'})}
        onMouseUp={() => this.setState({buttonMode: 'unengaged'})}
      >
        {/* <div style={this.$3501480799733()}> */}
        {this.props.children}
        {/* </div> */}
      </div>
    )
  }
  handleClick = () => {

    this.setState({buttonMode: 'engaged'})

    if (this.props.onClick) return this.props.onClick()
  }
  $4609523218411 = () => {

    const calcBackgroundColor = () => {
      switch (this.state.buttonMode) {
        case 'unengaged':
          return '#3498db'
        case 'unhovered':
          return '#3498db'
        case 'hovered':
          return '#3aabf5'
        case 'engaged':
          return '#3aabf5'
        default:
          return '#3498db'
      }
    }
    const calcBoxShadow = () => {
      switch (this.state.buttonMode) {
        case 'unengaged':
          return '0 13px 26px 0 rgba(80, 178, 243, 0.35)'
        case 'unhovered':
          return '0 13px 26px 0 rgba(80, 178, 243, 0.35)'
        case 'hovered':
          return '0 13px 26px 0 rgba(139, 205, 249, 0.35)'
        case 'engaged':
          return '0 13px 26px 0 rgba(80, 178, 243, 0.35)'
        default:
          return '0 13px 26px 0 rgba(80, 178, 243, 0.35)'
      }
    }

    return Object.assign({}, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem, 1rem',
      borderRadius: 4,
      backgroundColor: calcBackgroundColor(),
      boxShadow: calcBoxShadow(),
      color: 'white',
      fontSize: 16,
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 250ms ease-out',
    }, this.props.style)
  }
  $3501480799733 = () => {
    return {
      // position: 'absolute'
    }
  }
}

ReactGelButton.propTypes = {
  onClick: PropTypes.func,
}

export default ReactGelButton
