import React, { Component } from 'react'
import { View, LayoutAnimation } from 'react-native'

import style from './ToggleableRectangleStyle'

const ANIMATION_CONFIG = {
  duration: 1000,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.5
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.5
  },
  delete: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.opacity
  }
}

class ToggleableRectangle extends Component {
  componentWillReceiveProps () {
    // Schedules an animation to happen on the next layout.
    LayoutAnimation.configureNext(ANIMATION_CONFIG)
  }

  render () {
    return this.props.isVisible
      ? <View style={style.rectangle} />
      : null
  }
}

export default ToggleableRectangle
