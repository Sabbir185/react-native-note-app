import { View, StyleSheet, SafeAreaView, Image, Text, TextInput, Pressable, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import RoundButton from '../components/common/buttons/RoundButton'
import FormInput from '../components/form/Input'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { showMessage } from 'react-native-flash-message'


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loader, setLoader] = useState(false)

  const handleLogin = () => {
    setLoader(true)
    signInWithEmailAndPassword(auth, email, password).then(() => {
      showMessage({ message: 'Login successful', type: 'success', duration: 3000 })
      setLoader(false)
    }).catch(errro => {
      showMessage({ message: 'Failed', type: 'danger', duration: 3000 })
      setLoader(false)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/login.jpg')} style={{ width: 300, height: 200, alignSelf: 'center' }} />
      </View>

      <Text style={styles.neverForgotTest}>
        Never Forgot Your Notes
      </Text>

      <View style={{ paddingHorizontal: 16, marginVertical: 25 }}>
        <FormInput placeholder='Email Address' onChangeText={(e) => setEmail(e)} />
        <FormInput placeholder='Password' secureTextEntry onChangeText={(e) => setPassword(e)} />
      </View>

      {loader && <ActivityIndicator color={'green'} size={'large'} />}

      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        {loader === false && <RoundButton onPress={handleLogin} title={'Login'} customStyles={{ alignSelf: 'center', marginBottom: 60 }} />}
        <Pressable style={{ marginBottom: 20 }} onPress={() => navigation.navigate("Signup")}>
          <Text>
            Don't have an account?
            {" "}
            <Text style={{ color: 'green', fontWeight: 'bold' }}>Signup</Text>
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
  }
})