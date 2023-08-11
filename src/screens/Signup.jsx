import { View, StyleSheet, SafeAreaView, Image, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import RoundButton from '../components/common/buttons/RoundButton'
import FormInput from '../components/form/Input'
import RadionInput from '../components/form/radionInput'

const genderOptions = ['male', 'female']

export default function SignupScreen({ navigation }) {
  const [gender, setGender] = useState()

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 16, marginVertical: 25 }}>
        <FormInput placeholder='Email Address' />
        <FormInput placeholder='Password' secureTextEntry />
        <FormInput placeholder='Full Name' />
        <FormInput placeholder='Age' />
      </View>

      {/* radio button */}
      <View style={{ paddingHorizontal: 16 }}>
        <RadionInput options={genderOptions} value={gender} onChange={setGender} />
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <RoundButton title={'Signup'} customStyles={{ alignSelf: 'center', marginBottom: 60 }} />
        <Pressable style={{ marginBottom: 20 }} onPress={() => navigation.navigate("Login")}>
          <Text>
            Already have an account?
            {" "}
            <Text style={{ color: 'green', fontWeight: 'bold' }}>Login</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50 },
  neverForgotTest: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 25 },
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20
  },

  radionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#cfcfcf',

    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  selectedOuterCircle: {
    borderColor: 'orange'
  },
  innerCircle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: '#cfcfcf',
  },
  selectedInnerCircle: {
    backgroundColor: 'orange',
    borderColor: 'orange'
  },
  radioText: {
    marginTop: '10'
  },
})