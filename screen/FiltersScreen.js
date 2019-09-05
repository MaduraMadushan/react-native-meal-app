import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from './../components/HeaderButton'

const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The FiltersScreen Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meal',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        ></Item>
      </HeaderButtons>
    )
  }
}

export default FiltersScreen
