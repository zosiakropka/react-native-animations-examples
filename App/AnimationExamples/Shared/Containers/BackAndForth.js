import React, { Component } from 'react'
import { View } from 'react-native'

import WithPadding from '@app/Components/WithPadding'
import StyledButton from '@app/Components/StyledButton'

export default class BackAndForth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toTheRight: false
    }
  }

  render () {
    return (
      <View>
        <WithPadding>
          <StyledButton
            onPress={() => { this.setState({toTheRight: !this.state.toTheRight}) }}
            title={this.props.toggleDirectionText} />
        </WithPadding>
        <WithPadding>
          <this.props.HorizontalTraveller toTheRight={this.state.toTheRight} />
        </WithPadding>
      </View>
    )
  }
}
