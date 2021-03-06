import React, { Component } from 'react'
import { View } from 'react-native'
import randomColor from 'randomcolor'

import ColorfulRectangle from './ColorfulRectangle'
import AnimatedFlatList from './AnimatedFlatList'
import WithPadding from '@app/Components/WithPadding'
import StyledButton from '@app/Components/StyledButton'

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

  render () {
    return (
      <View>
        <WithPadding>
          <StyledButton
            title='Add item to list with LayoutAnimation'
            onPress={() => this.addRandomItem()} />
        </WithPadding>
        <WithPadding>
          <AnimatedFlatList
            data={this.state.items}
            renderItem={
              ({item}) => this.renderItem(item)
            } />
        </WithPadding>
      </View>
    )
  }

  addRandomItem () {
    this.setState({
      items: [randomItem(), ...this.state.items]
    })
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
