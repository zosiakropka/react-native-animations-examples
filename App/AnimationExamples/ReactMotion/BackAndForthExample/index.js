import React from 'react'

import HorizontalTraveller from './HorizontalTraveller'
import BackAndForth from '../../Shared/Containers/BackAndForth'

const Example = () => (
  <BackAndForth
    toggleDirectionText='Toggle direction with ReactMotion.Motion'
    horizontalTraveller={HorizontalTraveller} />
)

export default Example
