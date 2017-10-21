import React from 'react'
import { View, StatusBar } from 'react-native'

import style from './style'

const ContainerWithStatusBar = ({barStyle = 'dark-content', children}) => (
  <View>
    <StatusBar barStyle={barStyle} />
    <View style={style}>
      {children}
    </View>
  </View>
)

export default ContainerWithStatusBar
