import React, { Component } from 'react'
import { View, Text } from 'react-native'

import WithPadding from '@app/Components/WithPadding'
import StyledButton from '@app/Components/StyledButton'

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
            title={this.props.toggleVisibilityText}
            onPress={() => this.setState({
              rectangleIsVisible: !this.state.rectangleIsVisible
            })} />
        </WithPadding>
        <WithPadding>
          { this.state.rectangleIsVisible && this.props.toggleableElement }
        </WithPadding>
        <WithPadding>
          <Text>{this.props.footerText}</Text>
        </WithPadding>
      </View>
    )
  }
}
