import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function FormInput({ placeholder, secureTextEntry, onChangeText, autoCapitalize }) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 25
  }
})