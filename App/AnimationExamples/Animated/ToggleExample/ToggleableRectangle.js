import React, { Component } from 'react'
import { Animated } from 'react-native'

import style from './ToggleableRectangleStyle'

class ToggleableRectangle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scale: new Animated.Value(0)
    }
  }

  componentDidMount () {
    Animated.timing(
      this.state.scale,
      { toValue: 1,
        duration: 1000 }
    ).start()
  }

  render () {
    return <Animated.View
      style={[style.rectangle, {
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

export default ToggleableRectangle
