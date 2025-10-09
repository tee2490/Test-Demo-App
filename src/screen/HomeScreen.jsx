import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View>
      <Text>HomeScreen</Text>
    </View>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({})