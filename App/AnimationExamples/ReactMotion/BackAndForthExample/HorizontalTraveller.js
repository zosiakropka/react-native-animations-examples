import React, { Component } from 'react'
import { View } from 'react-native'
import { spring, Motion } from 'react-motion'

import style from '../../Shared/style'

export default class HorizontalTraveller extends Component {
  constructor (props) {
    super(props)
    this.state = {
      interpolatingStyle: {
        left: spring(0)
      }
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

    this.setState({
      interpolatingStyle: {
        left: spring(targetLeft)
      }
    })
  }

  render () {
    return (
      <View
        onLayout={({nativeEvent}) => this.setState({width: nativeEvent.layout.width})}
        style={style.backAndForthContainer}>
        <Motion
          defaultStyle={{left: 0}}
          style={this.state.interpolatingStyle}>
          {
            (interpolatingStyle) => (
              <View style={[
                style.tinyRedCircle,
                {
                  position: 'absolute',
                  top: 0
                },
                interpolatingStyle
              ]} />
            )
          }
        </Motion>
      </View>
    )
  }
}
