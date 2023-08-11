import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30 },
})