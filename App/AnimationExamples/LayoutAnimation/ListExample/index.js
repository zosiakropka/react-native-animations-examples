import React, { Component } from 'react'
import { View, FlatList, LayoutAnimation } from 'react-native'
import randomColor from 'randomcolor'

import ColorfulRectangle from './ColorfulRectangle'
import AddItemButton from './AddItemButton'
import WithPadding from '@app/Components/WithPadding'

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

const randomItem = () => (
  {
    color: randomColor(),
    key: Date.now()
  }
)

export default class ListExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillUpdate () {
    LayoutAnimation.configureNext(LAYOUT_SPRING)
  }

  render () {
    return (
      <View>
        <WithPadding>
          <AddItemButton
            onPress={
              () => {
                this.setState({
                  items: [randomItem(), ...this.state.items]
                })
              }
            } />
        </WithPadding>
        <WithPadding>
          <FlatList
            data={this.state.items}
            renderItem={
              ({item}) => this.renderItem(item)
            } />
        </WithPadding>
      </View>
    )
  }

  removeItemByKey (key) {
    this.setState({
      items: this.state.items.filter((item) => item.key !== key)
    })
  }

  renderItem (item) {
    return (
      <ColorfulRectangle
        color={item.color}
        onPress={() => this.removeItemByKey(item.key)} />
    )
  }
}
