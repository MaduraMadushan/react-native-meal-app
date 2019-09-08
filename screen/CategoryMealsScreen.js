import React from 'react'
import { useSelector } from 'react-redux'
import { CATEGORIES } from './../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryid')
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  )
  return <MealList listData={displayedMeals} navigation={navigation} />
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryid')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title
  }
}

export default CategoryMealsScreen
