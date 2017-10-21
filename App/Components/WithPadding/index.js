import React from 'react'
import { View } from 'react-native'

import style from './style'

const WithPadding = ({children}) => (
  <View style={style}>
    {children}
  </View>
)

export default WithPadding
