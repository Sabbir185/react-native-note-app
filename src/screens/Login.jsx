import { View, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'

export default function LoginScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/login.jpg')} style={{ width: 300, height: 200, alignSelf: 'center' }} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 50}
})