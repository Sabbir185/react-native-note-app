import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import CreateScreen from './src/screens/Create';
import EditScreen from './src/screens/Edit';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';
import FlashMessage from "react-native-flash-message";
import { useEffect, useState } from 'react';
import { auth, onAuthStateChanged, signOut } from './firebase';

const Stack = createNativeStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  }
}


export default function App() {
  const [loader, setLoader] = useState(true)
  const [user, setUser] = useState(null);

  // useEffect(()=>{
  //   signOut(auth)
  // },[])

  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (resUser) => {
      if (resUser) {
        setUser(resUser)
        setLoader(false)
      } else {
        setUser(null)
      }
    })
    return authSubscription
  }, [])

  if (loader) {
    setTimeout(() => {
      setLoader(false)
    }, 5000);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={'blue'} size={'large'} />
      </View>
    )
  }

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator>
        {
          user ?
            <>
              <Stack.Screen name="Home" options={{ headerShown: false }}>
                {(props) => <HomeScreen {...props} user={user} />}
              </Stack.Screen>
              <Stack.Screen name="Create" component={CreateScreen} />
              <Stack.Screen name="Edit" component={EditScreen} />
            </>
            :
            <>
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
