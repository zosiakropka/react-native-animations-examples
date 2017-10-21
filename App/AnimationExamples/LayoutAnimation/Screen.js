import React from 'react'
import { ScrollView, Platform, UIManager } from 'react-native'

import ContainerWithStatusBar from '@app/Components/ContainerWithStatusBar'
import ToggleExample from './ToggleExample'
import ListExample from './ListExample'

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const SecondScreen = () => (
  <ContainerWithStatusBar>
    <ScrollView>
      <ToggleExample />
      <ListExample />
    </ScrollView>
  </ContainerWithStatusBar>
)

export default SecondScreen
