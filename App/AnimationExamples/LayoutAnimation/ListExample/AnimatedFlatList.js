import React, { Component } from 'react'
import { FlatList, LayoutAnimation } from 'react-native'

var LAYOUT_SPRING = {
  duration: 500,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.5
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.5
  }
}

export default class AnimatedList extends Component {
  componentWillReceiveProps () {
    LayoutAnimation.configureNext(LAYOUT_SPRING)
  }

  render () {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.props.renderItem} />
    )
  }
}
