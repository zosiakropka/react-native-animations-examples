import React, { Component } from 'react'
import { View } from 'react-native'

import WithPadding from '@app/Components/WithPadding'
import Bar from './Bar'
import style from '../../Shared/style'

const BARS_CONFIG = [
  '#d6846e',
  '#ffeeb0',
  '#96cfb9',
  '#6ec0d6',
  '#537fbb'
].map(color => ({
  color,
  height: 0
}))

export default class BarsPreview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bars: BARS_CONFIG,
      indexToGrow: 0
    }
  }

  componentDidMount () {
    this._growByIndex(this.state.indexToGrow)
  }

  render () {
    return (
      <WithPadding>
        <View style={style.barChart}>
          {
            this.state.bars
              .map(({color, height}, index) => (
                <Bar
                  key={index}
                  height={height}
                  color={color}
                  doAfterHeightAdjusted={() => {
                    this._growByIndex(this.state.indexToGrow)
                  }} />
              ))
          }
        </View>
      </WithPadding>
    )
  }

  _growByIndex (indexToGrow) {
    const barsAfterChange = this.state.bars
      .map((bar, index) => (
        indexToGrow === index
          ? {...bar, height: bar.height + 50}
          : {...bar}
      ))
    this.setState({bars: barsAfterChange})
    this.setState({
      indexToGrow: (this.state.indexToGrow + 1) % this.state.bars.length
    })
  }
}
