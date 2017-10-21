import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import I18n from 'react-native-i18n'

import { Images } from '@app/Themes'

// Styles
import styles from './Styles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Image source={Images.ready} />
              <Text style={styles.sectionText}>{I18n.t('helloWorld')}</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
