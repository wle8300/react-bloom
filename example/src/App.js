import Menu from './Menu'
import IconDownload from './imgs/icon-download.svg'

import React, {Component} from 'react'
import ReactBloom from 'react-bloom'
import ReactGelButton from './ReactGelButton'
import { CompactPicker } from 'react-color'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backdrop: 'white',
      bloomSize: 100,
      transitionTiming: 'cubic-bezier(0.215, 0.61, 0.355, 1)', // "easeOutCubic"
      animationMs: 250,
      disappearCompound: 5,
      backgroundColor: 'black',
      opacity: 0.5,
    }
  }
  render() {
    return (
      <div style={this.$1804017614722()}>

        <div style={this.$2051595411281()}>
          <ReactBloom bloomSize={this.state.bloomSize} animationMs={this.state.animationMs} disappearCompound={this.state.disappearCompound} backgroundColor={this.state.backgroundColor} opacity={this.state.opacity}/>
          <div style={{
            zoom: 1.25,
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
          }}
          >
            <CompactPicker onChangeComplete={this.handleChangeBackdrop}/>
          </div>
          <Menu
            bloomSize={this.state.bloomSize}
            animationMs={this.state.animationMs}
            disappearCompound={this.state.disappearCompound}
            backgroundColor={this.state.backgroundColor}
            opacity={this.state.opacity}
            handleChangeBloomSize={this.handleChangeBloomSize}
            handleChangeAnimationMs={this.handleChangeAnimationMs}
            handleChangeDisappearCompound={this.handleChangeDisappearCompound}
            handleChangeBackgroundColor={this.handleChangeBackgroundColor}
            handleChangeOpacity={this.handleChangeOpacity}
          />
        </div>

        <div style={this.$3179755104785()}>

          <ReactGelButton style={{
            position: 'relative',
            width: 150,
            height: 50,
            overflow: 'hidden',
          }}>


            {/*this.props.children*/}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}>
              <img
                src={IconDownload}
                alt="Download icon"
                style={{
                  marginRight: 7,
                }}
              />
              Download
            </div>
            <ReactBloom bloomSize={75} backgroundColor="#5ebfff" opacity={0.3}/>
            {/*this.props.children*/}

          </ReactGelButton>
        </div>

        {/* ReactTektileButton */}

        {/* BLUR */}

        {/* Music player */}
        <div style={this.$4366944589932()}>
          <ReactBloom filter="blur(50px)" bloomSize={150} animationMs={350} backgroundColor="blue" opacity={1}/>
        </div>

      </div>
    )
  }
  handleChangeBackdrop = (color, e) => {

    this.setState({backdrop: color.hex})
  }
  handleChangeBloomSize = (e) => {

    this.setState({bloomSize: parseInt(e.target.value, 10)})
  }
  handleChangeAnimationMs = (e) => {

    this.setState({animationMs: parseInt(e.target.value, 10)})
  }
  handleChangeDisappearCompound = (e) => {

    this.setState({disappearCompound: parseInt(e.target.value, 10)})
  }
  handleChangeBackgroundColor = (e) => {

    this.setState({backgroundColor: e.target.value})
  }
  handleChangeOpacity = (e) => {

    if (parseFloat(e.target.value, 10)) return this.setState({opacity: parseFloat(e.target.value, 10)})

    else return
  }
  $1804017614722 = () => {
    return {
      width: '100%',
      height: '100%',
      outline: 'none',
      userSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      WebkitTouchCallout: 'none',
      WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none'
    }
  }
  $2051595411281 = () => {
    return {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundColor: this.state.backdrop,
    }
  }
  $3179755104785 = () => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f5f7fa',
    }
  }
  $4366944589932 = () => {
    return {width: '100vw', height: '100vh', backgroundColor: 'gray',}
  }
}

export default App
