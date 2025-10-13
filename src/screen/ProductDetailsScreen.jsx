import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProductDetailsScreen</Text>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({ container: {
    backgroundColor: "white",
    //marginTop: Platform.OS == "android" ? 25 : 0,
    padding: 20,
  },})
