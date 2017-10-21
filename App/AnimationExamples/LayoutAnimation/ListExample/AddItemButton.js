import React from 'react'
import StyledButton from '@app/Components/StyledButton'

const AddItemButton = ({onPress}) => (
  <StyledButton onPress={onPress} title={'Add item'} />
)

export default AddItemButton
