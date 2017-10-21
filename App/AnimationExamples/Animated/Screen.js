import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ContainerWithStatusBar from '@app/Components/ContainerWithStatusBar'

export default class LaunchScreen extends Component {
  render () {
    return (
      <ContainerWithStatusBar>
        <View><Text>wtf</Text></View>
      </ContainerWithStatusBar>
    )
  }
}
