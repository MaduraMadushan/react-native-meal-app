import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MEALS } from './../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from './../components/HeaderButton'

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId')
  const selecteMeal = MEALS.find(meal => meal.id === mealId)
  return (
    <View style={styles.screen}>
      <Text>{selecteMeal.title}</Text>
      <Button
        title='Go back to Categories'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId')
  const selecteMeal = MEALS.find(meal => meal.id === mealId)

  return {
    headerTitle: selecteMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => alert('Hello')}
        ></Item>
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealDetailScreen
