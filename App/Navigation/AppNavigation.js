import { TabNavigator } from 'react-navigation'
import AnimatedScreen from '@app/AnimationExamples/Animated/Screen'
import AnimatableScreen from '@app/AnimationExamples/Animatable/Screen'
import LayoutAnimationScreen from '@app/AnimationExamples/LayoutAnimation/Screen'

const AppNavigation = TabNavigator({
  Animated: {
    screen: AnimatedScreen,
    navigationOptions: {
      tabBarLabel: 'Animated'
    }
  },
  LayoutAnimation: {
    screen: LayoutAnimationScreen,
    navigationOptions: {
      tabBarLabel: 'LayoutAnimation'
    }
  },
  Animatable: {
    screen: AnimatableScreen,
    navigationOptions: {
      tabBarLabel: 'Animatable'
    }
  }
})

export default AppNavigation
