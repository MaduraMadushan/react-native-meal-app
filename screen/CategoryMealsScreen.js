import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { CATEGORIES } from './../data/dummy-data'

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryid')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  return (
    <View style={styles.screen}>
      <Text>The CategoryMeals Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to Meals Detail'
        onPress={() => navigation.navigate('MealDetail')}
      />
      <Button title='Go Back' onPress={() => navigation.pop()} />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryid')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen
