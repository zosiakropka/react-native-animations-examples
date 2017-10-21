import { TabNavigator } from 'react-navigation'
import Animated from '@app/AnimationExamples/Animated/index'
import LayoutAnimation from '@app/AnimationExamples/LayoutAnimation/index'

const AppNavigation = TabNavigator({
  Animated: {
    screen: Animated,
    navigationOptions: {
      tabBarLabel: 'Animated'
    }
  },
  LayoutAnimation: {
    screen: LayoutAnimation,
    navigationOptions: {
      tabBarLabel: 'LayoutAnimation'
    }
  }
})

export default AppNavigation
