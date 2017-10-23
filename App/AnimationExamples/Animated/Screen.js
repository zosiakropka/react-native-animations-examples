import React from 'react'
import { ScrollView } from 'react-native'

import ContainerWithStatusBar from '@app/Components/ContainerWithStatusBar'
import SequenceExample from './SequenceExample'
import ToggleExample from './ToggleExample'
import BackAndForthExample from './BackAndForthExample'

const SecondScreen = () => (
  <ContainerWithStatusBar>
    <ScrollView>
      <SequenceExample />
      <ToggleExample />
      <BackAndForthExample />
    </ScrollView>
  </ContainerWithStatusBar>
)

export default SecondScreen
