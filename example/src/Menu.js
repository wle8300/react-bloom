import React, {Component} from 'react'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false
    }
  }
  render() {
    return (
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
      }}>

        <div onClick={this.toggleMenu} style={{
          display: this.state.isMenuVisible ? 'none' : 'inline-block',
          padding: '0.5rem 0.75rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          backgroundColor: 'white',
          boxShadow: '0px 2px 30px 0px rgba(0, 0, 0, 0.15)',
          borderRadius: 4,
        }}>
          Customize
        </div>

        <div style={{
          position: 'relative',
          display: 'block',
          width: 300,
          height: this.state.isMenuVisible
            ? 500
            : 0,
          overflow: 'scroll',
          transition: 'height 200ms ease-in',
          backgroundColor: 'white',
          boxShadow: '0px 2px 30px 0px rgba(0, 0, 0, 0.15)',
          borderRadius: 4,
        }}>

          <div onClick={this.toggleMenu} style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            padding: '0.5rem 0.75rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: 'black',
            cursor: 'pointer',
            border: '1px dotted white',
          }}>X</div>

          <div style={this.$4459638640327()}>
            <label>
              <h3 style={{
                margin: '30px 0 0',
                lineHeight: '7px'
              }}>Props</h3>
            </label>
          </div>

          <div style={this.$4459638640327()}>
            <label>
              <pre style={{display: 'inline-block', margin: '30px 0 0', lineHeight: '7px',}}>bloomSize</pre> <pre style={{display: 'inline-block', fontSize: '0.6rem'}}>[number Object]</pre>
              <div style={{lineHeight: '0px', fontSize: '0.6rem'}}>any positive integer, 25, 75, 100</div>
            </label>
            <br/>
            <input onChange={this.props.handleChangeBloomSize} value={this.props.bloomSize} type="number"/>
          </div>

          <div style={this.$4459638640327()}>
            <label>
              <pre style={{display: 'inline-block', margin: '30px 0 0', lineHeight: '7px',}}>animationMs</pre> <pre style={{display: 'inline-block', fontSize: '0.6rem'}}>[number Object]</pre>
              <div style={{lineHeight: '0px', fontSize: '0.6rem'}}>any positive integer, 100, 250, 1250</div>
            </label>
            <br/>
            <input onChange={this.props.handleChangeAnimationMs} value={this.props.animationMs} type="number"/>
          </div>

          <div style={this.$4459638640327()}>
            <label>
              <pre style={{display: 'inline-block', margin: '30px 0 0', lineHeight: '7px',}}>disappearCompound</pre> <pre style={{display: 'inline-block', fontSize: '0.6rem'}}>[number Object]</pre>
              <div style={{lineHeight: '0px', fontSize: '0.6rem'}}>any positive integer, 1, 11, 23</div>
            </label>
            <br/>
            <input onChange={this.props.handleChangeDisappearCompound} value={this.props.disappearCompound} type="number"/>
          </div>

          <div style={this.$4459638640327()}>
            <label>
              <pre style={{display: 'inline-block', margin: '30px 0 0', lineHeight: '7px',}}>backgroundColor</pre> <pre style={{display: 'inline-block', fontSize: '0.6rem'}}>[string Object]</pre>
              <div style={{lineHeight: '0px', fontSize: '0.6rem'}}>black, #ff0000, rgba(0, 0, 0, 1)</div>
            </label>
            <br/>
            <input onChange={this.props.handleChangeBackgroundColor} value={this.props.backgroundColor}/>
          </div>

          <div style={this.$4459638640327()}>
            <label>
              <pre style={{display: 'inline-block', margin: '30px 0 0', lineHeight: '7px',}}>opacity</pre> <pre style={{display: 'inline-block', fontSize: '0.6rem'}}>[number Object]</pre>
              <div style={{lineHeight: '0px', fontSize: '0.6rem'}}>floating point between 0––1: 0.1, 0.55, 0.9</div>
            </label>
            <br/>
            <input onChange={this.props.handleChangeOpacity} value={this.props.opacity}/>
          </div>

        </div>
      </div>
    )
  }
  toggleMenu = () => {
    return this.setState({
      isMenuVisible: !this.state.isMenuVisible
    })
  }
  $4459638640327 = () => {
    return {margin: '0.5rem 1rem'}
  }
}

export default Menu
