import React from 'react'
import { ScrollView } from 'react-native'

import ContainerWithStatusBar from '@app/Components/ContainerWithStatusBar'
import ToggleExample from './ToggleExample'

const SecondScreen = () => (
  <ContainerWithStatusBar>
    <ScrollView>
      <ToggleExample />
    </ScrollView>
  </ContainerWithStatusBar>
)

export default SecondScreen
