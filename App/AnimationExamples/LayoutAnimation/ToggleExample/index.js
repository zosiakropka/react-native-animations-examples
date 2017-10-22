import React, { Component } from 'react'
import { View, Text } from 'react-native'

import WithPadding from '@app/Components/WithPadding'
import StyledButton from '@app/Components/StyledButton'
import ToggleableRectangle from './ToggleableRectangle'

export default class ToggleExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rectangleIsVisible: false
    }
  }

  render () {
    return (
      <View>
        <WithPadding>
          <StyledButton
            title={'Toggle visibility'}
            onPress={() => this.setState({
              rectangleIsVisible: !this.state.rectangleIsVisible
            })} />
        </WithPadding>
        <WithPadding>
          { this.state.rectangleIsVisible && <ToggleableRectangle /> }
        </WithPadding>
        <WithPadding>
          <Text>a footer to show it bounced out</Text>
        </WithPadding>
      </View>
    )
  }
}
