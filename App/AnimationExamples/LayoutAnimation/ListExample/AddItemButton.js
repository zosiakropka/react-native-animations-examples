import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'

import style from './AddItemButtonStyle'

const AddItemButton = ({onPress}) => (
  <View style={style.container}>
    <TouchableHighlight
      style={style.button}
      onPress={() => onPress()}>
      <Text style={style.label}>
        Add item
      </Text>
    </TouchableHighlight>
  </View>
)

export default AddItemButton
