import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'

import style from './style'

const AddItemButton = ({onPress, title}) => (
  <View style={style.container}>
    <TouchableHighlight
      style={style.button}
      onPress={() => onPress()}>
      <Text style={style.label}>
        {title}
      </Text>
    </TouchableHighlight>
  </View>
)

export default AddItemButton
