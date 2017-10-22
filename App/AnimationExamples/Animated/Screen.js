import React from 'react'
import { ScrollView } from 'react-native'

import ContainerWithStatusBar from '@app/Components/ContainerWithStatusBar'
import SequenceExample from './SequenceExample'
import ToggleExample from './ToggleExample'

const SecondScreen = () => (
  <ContainerWithStatusBar>
    <ScrollView>
      <SequenceExample />
      <ToggleExample />
    </ScrollView>
  </ContainerWithStatusBar>
)

export default SecondScreen
