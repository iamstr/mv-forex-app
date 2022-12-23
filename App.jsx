import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from "./screens/LoginScreen"

import LoginScreen from './screens/LoginScreen';
import ForgotScreen from './screens/ForgotScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Signin">
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{
            title: 'MV FOREX EXCHANGE',
            headerStyle: {
              backgroundColor: '#4BFB9D',
            },
            headerTintColor: '#026E34',
          }} />
      
         <Stack.Screen name="Forgot" component={ForgotScreen} options={{
          title: 'Forgot Password',
          headerStyle: {
            backgroundColor: '#4BFB9D',
          },
          headerTintColor: '#026E34',
        }}/> 
         <Stack.Screen name="Signup" component={SignupScreen} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#026E34',
        }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
