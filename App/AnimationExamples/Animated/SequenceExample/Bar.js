import React, { Component } from 'react'
import { Animated } from 'react-native'

import style from '../../Shared/style'

const getRandomInRange = ({from, to}) => (Math.random() * (to - from)) + from

export default class Item extends Component {
  constructor (props) {
    super(props)

    this.state = {
      height: new Animated.Value(this.props.height)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.height === this.props.height) {
      return
    }

    this._adjustHeight({height: nextProps.height})
  }

  render () {
    return (
      <Animated.View style={[
        style.barRectangle,
        {
          height: this.state.height,
          backgroundColor: this.props.color
        }
      ]} />
    )
  }

  _adjustHeight ({height}) {
    Animated.timing(
      this.state.height,
      {
        toValue: height,
        duration: getRandomInRange({from: 20, to: 1000})

      }
    ).start(() => this._heightWasAdjusted())
  }

  _heightWasAdjusted () {
    if (!this.props.doAfterHeightAdjusted) {
      return
    }

    this.props.doAfterHeightAdjusted()
  }
}
