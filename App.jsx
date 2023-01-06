import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import CustomTab from './CustomTab';
import ConfirmAccountScreen from './screens/ConfirmAccountScreen';
// import LoginScreen from "./screens/LoginScreen"

import ForgotScreen from './screens/ForgotScreen';
import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import SignupScreen from './screens/SignupScreen';
import TermScreen from './screens/TermScreen';
import UploadScreen from './screens/UploadScreen';
import VerifyScreen from './screens/VerifyScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'MV FOREX EXCHANGE',
            headerStyle: {
              backgroundColor: '#4BFB9D',
            },
            headerTintColor: '#026E34',
          }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotScreen}
          options={{
            title: 'Forgot Password',
            headerStyle: {
              backgroundColor: '#4BFB9D',
            },
            headerTintColor: '#026E34',
          }}
        />
        <Stack.Group>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              title: "Let's get started",
              headerStyle: {
                backgroundColor: 'transparent',
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              headerShadowVisible: false,
              headerTintColor: '#026E34',
            }}
          />
          <Stack.Screen
            name="Verify"
            component={VerifyScreen}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'transparent',
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              headerShadowVisible: false,
              headerTintColor: '#026E34',
            }}
          />
          <Stack.Screen
            name="Upload"
            component={UploadScreen}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'transparent',
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              headerShadowVisible: false,
              headerTintColor: '#026E34',
            }}
          />
          <Stack.Screen
            name="Terms"
            component={TermScreen}
            options={{
              title: 'Our Policies',
              headerStyle: {
                backgroundColor: 'transparent',
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              headerShadowVisible: false,
              headerTintColor: '#026E34',
            }}
          />
          <Stack.Screen
            name="ConfirmAccount"
            component={ConfirmAccountScreen}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'transparent',
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              headerShadowVisible: false,
              headerTintColor: '#026E34',
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="OTP"
            component={OTPScreen}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'transparent',
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              headerShadowVisible: false,
              headerTintColor: '#026E34',
              headerBackVisible: false,
            }}
          />
        </Stack.Group>
        <Stack.Screen
          name="Home"
          component={CustomTab}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerShadowVisible: false,
            headerTintColor: '#026E34',
            headerBackVisible: false,
            headerShown: false,
          }}
        />
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
