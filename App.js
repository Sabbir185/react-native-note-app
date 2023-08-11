import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import CreateScreen from './src/screens/Create';
import EditScreen from './src/screens/Edit';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';

const Stack = createNativeStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  }
}


export default function App() {
  const user = false;

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator>
        {
          user ?
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Create" component={CreateScreen} />
              <Stack.Screen name="Edit" component={EditScreen} />
            </>
            :
            <>
              <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
        }
      </Stack.Navigator>
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
