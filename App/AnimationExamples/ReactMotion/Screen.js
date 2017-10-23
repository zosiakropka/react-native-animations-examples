import React from 'react'
import { ScrollView } from 'react-native'

import ContainerWithStatusBar from '@app/Components/ContainerWithStatusBar'
import BackAndForthExample from './BackAndForthExample'

const ReactMotionScreen = () => (
  <ContainerWithStatusBar>
    <ScrollView>
      <BackAndForthExample />
    </ScrollView>
  </ContainerWithStatusBar>
)

export default ReactMotionScreen
