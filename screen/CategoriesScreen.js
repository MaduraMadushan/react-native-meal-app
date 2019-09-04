import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { CATEGORIES } from './../data/dummy-data'
import CategoryGirdTile from '../components/CategoryGirdTile'

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = itemData => {
    return (
      <CategoryGirdTile
        title={itemData.item.title}
        onSelect={() =>
          navigation.navigate('CategoryMeals', { categoryid: itemData.item.id })
        }
        color={itemData.item.color}
      />
    )
  }
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
})

export default CategoriesScreen
