import React, { Component } from 'react';

import Gamepad from 'react-gamepad'

class TwoPlayerExample extends Component {

  constructor() {
    super()

    this.state = {
      speedX1: 0.0,
      speedY1: 0.0,
      x1: 300.0,
      y1: 200.0,

      speedX2: 0.0,
      speedY2: 0.0,
      x2: 300.0,
      y2: 300.0,


    }
  }

  componentDidMount() {
    window.requestAnimationFrame(this.update.bind(this))
  }

  update(datetime) {
    window.requestAnimationFrame(this.update.bind(this))

    const frameTime = datetime - this.previousFrameTime
    this.previousFrameTime = datetime

    if (isNaN(frameTime))
      return

    const baseSpeed = 150.0 // pixels per second
    const ratio = baseSpeed * (frameTime / 1000.0)

    this.setState({
      x1: this.state.x1 + (this.state.speedX1 * ratio),
      y1: this.state.y1 - (this.state.speedY1 * ratio)
    })

    this.setState({
      x2: this.state.x2 + (this.state.speedX2 * ratio),
      y2: this.state.y2 - (this.state.speedY2 * ratio)
    })
  }

  connectHandler(gamepadIndex) {
    console.log(`Gamepad ${gamepadIndex} connected!`)
  }

  disconnectHandler(gamepadIndex) {
    console.log(`Gamepad ${gamepadIndex} disconnected !`)
  }

  axisChangeHandler1(axisName, value, previousValue) {
    if (axisName === 'LeftStickX') {
      this.setState({
        speedX1: value
      })
    } else if (axisName === 'LeftStickY') {
      this.setState({
        speedY1: value
      })
    }
  }

  axisChangeHandler2(axisName, value, previousValue) {
    if (axisName === 'LeftStickX') {
      this.setState({
        speedX2: value
      })
    } else if (axisName === 'LeftStickY') {
      this.setState({
        speedY2: value
      })
    }
  }

  getPlayer1Style() {
    return {
      height: '50px',
      width: '50px',

      background: 'red',

      position: 'fixed',

      top: Math.round(this.state.y1) + 'px',
      left: Math.round(this.state.x1) + 'px',
    }
  }

  getPlayer2Style() {
    return {
      height: '50px',
      width: '50px',

      background: 'blue',

      position: 'fixed',

      top: Math.round(this.state.y2) + 'px',
      left: Math.round(this.state.x2) + 'px',
    }
  }

  render() {
    return (
      <div>
        <Gamepad
          gamepadIndex={0}
          onConnect={this.connectHandler.bind(this)}
          onDisconnect={this.disconnectHandler.bind(this)}
          onAxisChange={this.axisChangeHandler1.bind(this)}
        >
          <div id='player1' style={this.getPlayer1Style()} />
        </Gamepad>

        <Gamepad
          gamepadIndex={1}
          onConnect={this.connectHandler.bind(this)}
          onDisconnect={this.disconnectHandler.bind(this)}
          onAxisChange={this.axisChangeHandler2.bind(this)}
        >
          <div id='player2' style={this.getPlayer2Style()} />
        </Gamepad>
      </div>
    );
  }
}

export default TwoPlayerExample
