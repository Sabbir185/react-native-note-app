import { View, StyleSheet, SafeAreaView, Image, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import RoundButton from '../components/common/buttons/RoundButton'
import FormInput from '../components/form/Input'
import RadionInput from '../components/form/radionInput'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, auth, collection, db } from '../../firebase'
import { showMessage } from "react-native-flash-message";

const genderOptions = ['male', 'female']


export default function SignupScreen({ navigation }) {
  const [gender, setGender] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const docRef = await addDoc(collection(db, "users"), {
        name,
        email,
        age,
        gender,
        uid: userCredential.user.uid
      });
      showMessage({message: 'Signup successful', type: 'success', duration: 3000})
    } catch (e) {
      console.error("Error adding document: ", e);
      showMessage({message: 'Failed!', type: 'danger', duration: 3000})
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 16, marginVertical: 10 }}>
        <FormInput placeholder='Email Address' onChangeText={(e) => setEmail(e)} />
        <FormInput placeholder='Password' onChangeText={(e) => setPassword(e)} secureTextEntry />
        <FormInput placeholder='Full Name' onChangeText={(e) => setName(e)} />
        <FormInput placeholder='Age' onChangeText={(e) => setAge(e)} />
      </View>

      {/* radio button */}
      <View style={{ paddingHorizontal: 16 }}>
        <RadionInput label='select gender' options={genderOptions} value={gender} onChange={setGender} />
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <RoundButton onPress={handleSignup} title={'Sign up'} customStyles={{ alignSelf: 'center', marginBottom: 60 }} />
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
  container: { flex: 1, marginTop: 20 },
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