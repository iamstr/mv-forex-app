import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Pressable, StyleSheet } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomTab from './CustomTab';
import ConfirmAccountScreen from './screens/ConfirmAccountScreen';
import { default as ChannelScreen, default as DepositScreen } from './screens/DepositScreen';
// import LoginScreen from "./screens/LoginScreen"
import _themeColor from './colorScheme.json';
import ForgotScreen from './screens/ForgotScreen';
import LoginScreen from './screens/LoginScreen';
import NotificationScreen from './screens/NotificationScreen';
import OTPScreen from './screens/OTPScreen';
import SignupScreen from './screens/SignupScreen';
import TermScreen from './screens/TermScreen';
import UploadScreen from './screens/UploadScreen';
import VerifyScreen from './screens/VerifyScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('./assets/fonts/Karla/KarlaRegular.ttf'),
    'Karla-Medium': require('./assets/fonts/Karla/KarlaMedium.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla/KarlaBold.ttf'),
  });
  return (
    <RootSiblingParent>
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
          <Stack.Group>
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
                // headerTintColor: '#026E34',
                headerBackVisible: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Deposit"
              component={DepositScreen}
              options={({ navigation }) => ({
                title: 'Hello John Doe',
                headerStyle: {
                  backgroundColor: 'transparent',
                  fontFamily: 'Karla-Bold',
                  fontSize: 18,
                },
                headerShadowVisible: false,
                headerTintColor: '#026E34',
                headerRight: () => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate('NotificationModal');
                    }}
                  >
                    <Ionicons
                      name="notifications"
                      size={26}
                      color={_themeColor.secondary}
                      style={styles.headerRight}
                    />
                  </Pressable>
                ),
              })}
            />
            <Stack.Screen
              name="Channel"
              component={ChannelScreen}
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

            <Stack.Group
              screenOptions={({ navigation }) => ({
                presentation: 'modal',
                title: 'Notification Area',
                headerTitleStyle: { fontFamily: 'Karla-Medium' },

                headerRight: () => (
                  <Pressable
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Ionicons
                      name="close-circle"
                      size={26}
                      color={_themeColor.gray}
                      style={styles.headerRight}
                    />
                  </Pressable>
                ),
              })}
            >
              <Stack.Screen name="NotificationModal" component={NotificationScreen} />
            </Stack.Group>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
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
