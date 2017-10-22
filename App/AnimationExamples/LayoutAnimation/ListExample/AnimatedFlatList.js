import React, { Component } from 'react'
import { FlatList, LayoutAnimation } from 'react-native'

const ANIMATION_CONFIG = {
  duration: 500,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.4
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.4
  }
  // delete had its glitches
}

export default class AnimatedList extends Component {
  componentWillReceiveProps () {
    // Schedules an animation to happen on the next layout.
    LayoutAnimation.configureNext(ANIMATION_CONFIG)
  }

  render () {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.props.renderItem} />
    )
  }
}
