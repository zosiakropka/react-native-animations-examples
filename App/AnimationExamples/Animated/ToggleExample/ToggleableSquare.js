import React, { Component } from 'react'
import { Animated } from 'react-native'

import style from '../../Shared/style'

class ToggleableSquare extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scale: new Animated.Value(0)
    }
  }

  componentDidMount () {
    Animated.spring(
      this.state.scale,
      { toValue: 1 }
    ).start()
    // Animated.timing(
    //   this.state.scale,
    //   { toValue: 1,
    //     duration: 1000 }
    // ).start()
  }

  render () {
    return <Animated.View
      style={[style.bigRedSquare, {
        transform: [
          {scale: this.state.scale}
        ]
      }]} />
  }

  componentWillUnmount () {
    Animated.timing(
      this.state.scale,
      { toValue: 1,
        duration: 1000 }
    ).start()
  }
}

export default ToggleableSquare
