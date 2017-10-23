import React, { Component } from 'react'
import { View } from 'react-native'

import WithPadding from '@app/Components/WithPadding'
import StyledButton from '@app/Components/StyledButton'

import BarsPreview from './BarsPreview'

export default class SequenceExample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      enabled: false
    }
  }

  render () {
    return (
      <View>
        <WithPadding>
          <StyledButton
            title='Toggle Bars with Animated'
            onPress={() => this.setState({enabled: !this.state.enabled})} />
        </WithPadding>
        {
          this.state.enabled && <BarsPreview />
        }
      </View>
    )
  }
}
