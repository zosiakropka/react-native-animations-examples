import React from 'react'
import { TouchableHighlight, Text } from 'react-native'

import style from './ColorfulRectangleStyle'

const ColorfulRectangle = ({color, onPress}) => (
  <TouchableHighlight
    style={[style.rectangle, {backgroundColor: color}]}
    onPress={() => onPress()}>
    <Text
      style={style.text}>
      click to remove
    </Text>
  </TouchableHighlight>
)

export default ColorfulRectangle
