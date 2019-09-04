import { Platform } from 'react-native'
import Colors from './../constants/Colors'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from './../screen/CategoriesScreen'
import CategoryMealsScreen from './../screen/CategoryMealsScreen'
import MealDetailScreen from './../screen/MealDetailScreen'

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories'
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : ''
    }
  }
)

export default createAppContainer(MealsNavigator)
