import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from "./screens/LoginScreen"

import LoginScreen from "./screens/LoginScreen.js";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
     <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Signin">
        {/*<Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
       {/* <Stack.Screen name="Signout" component={SignoutScreen} />*/}
       {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />*/}
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
