import React, { Component } from 'react'
import { View, Animated } from 'react-native'

import style from '../../Shared/style'

export default class HorizontalTraveller extends Component {
  constructor (props) {
    super(props)

    this.state = {
      leftValue: new Animated.Value(0)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.toTheRight === nextProps.toTheRight) {
      return
    }

    if (!this.state.width) {
      return
    }

    const targetLeft = nextProps.toTheRight
      ? this.state.width
      : 0

    Animated.spring(this.state.leftValue, {
      toValue: targetLeft
    }).start()
  }

  render () {
    return (
      <View
        onLayout={({nativeEvent}) => this.setState({width: nativeEvent.layout.width})}
        style={style.backAndForthContainer}>
        <Animated.View
          style={[
            style.tinyRedCircle,
            {
              position: 'absolute',
              top: 0,
              left: this.state.leftValue
            }
          ]} />
      </View>
    )
  }
}
