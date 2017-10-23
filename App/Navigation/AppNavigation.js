import { TabNavigator } from 'react-navigation'
import AnimatedScreen from '@app/AnimationExamples/Animated/Screen'
import ReactMotionScreen from '@app/AnimationExamples/ReactMotion/Screen'
import LayoutAnimationScreen from '@app/AnimationExamples/LayoutAnimation/Screen'
import AnimatableScreen from '@app/AnimationExamples/Animatable/Screen'

const AppNavigation = TabNavigator({
  Animated: {
    screen: AnimatedScreen,
    navigationOptions: {
      tabBarLabel: 'Animated'
    }
  },
  ReactMotion: {
    screen: ReactMotionScreen,
    navigationOptions: {
      tabBarLabel: 'ReactMotion'
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
