import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RoundButton({title, onPress, customStyles}) {
  return (
    <TouchableOpacity style={[styles.button, customStyles]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: 165,
    height: 45,
    backgroundColor: '#FFE600',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: { fontSize: 16 }
})