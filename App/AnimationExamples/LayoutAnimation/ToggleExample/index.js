import React from 'react'

import ToggleableSquare from './ToggleableSquare'
import ToggleExample from '../../Shared/Containers/ToggleExample'

export default () => (
  <ToggleExample
    toggleableElement={<ToggleableSquare />}
    footerText='a footer to show it bounced out'
    toggleVisibilityText='Toggle square with LayoutAnimation' />
)
