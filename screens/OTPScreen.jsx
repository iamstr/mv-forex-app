import { CommonActions, useNavigation } from '@react-navigation/native';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

import { useFonts } from 'expo-font';
import _themeColor from '../colorScheme.json';
import OTP from '../components/OTP';
import useShowHideButton from '../hooks/useShowHideButton';

function OTPScreen() {
  const [isVisible, toggleButton, showButton, hideButton] = useShowHideButton(false);
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('../assets/fonts/Karla/KarlaRegular.ttf'),
    'Karla-Medium': require('../assets/fonts/Karla/KarlaMedium.ttf'),
    'Karla-Bold': require('../assets/fonts/Karla/KarlaBold.ttf'),
  });
  return (
    <SafeAreaView style={{ backgroundColor: _themeColor.white, height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.document}>
          <Text style={styles.welcome}>Check your email</Text>
          <OTP buttonShow={showButton} buttonToggle={toggleButton} buttonHide={hideButton} />
          <TouchableOpacity
            title="Login"
            onPress={() => {
              Navigation.navigate('OTP');
            }}
            style={styles.transparentButton}
            underlayColor={_themeColor.primary}
          >
            <Text style={styles.loginText}>Resend Code</Text>
          </TouchableOpacity>
          {isVisible && (
            <TouchableOpacity
              title="Login"
              onPress={() => {
                // navigation.navigate('Home');
                navigation.dispatch((state) => CommonActions.reset({
                  routes: [{ name: 'Login', params: { login: true } }],
                }));
              }}
              style={styles.button}
              underlayColor={_themeColor.primary}
            >
              <Text style={styles.loginText}>Go to Home Screen</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OTPScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: _themeColor.primary,
    borderRadius: 25,
    elevation: 12,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    // marginLeft: 10,
    // marginRight: 30,
    marginBottom: 30,
    marginTop: 30,
    paddingHorizontal: 20,
    shadowColor: _themeColor.gray,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    width: '90%',
  },
  chevron: {},
  container: {
    backgroundColor: _themeColor.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    marginTop: -40,
    paddingBottom: 300,
    paddingTop: 200,
  },
  danger: {
    color: _themeColor.danger,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    textAlign: 'center',
  },

  document: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  idImage: {
    borderRadius: 18,
    height: 350,
    // marginTop: 70,
    width: 320,
  },

  label: {
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    lineHeight: 27,
    marginBottom: 30,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    // marginLeft: 30,
    textAlign: 'center',
  },
  transparentButton: {
    backgroundColor: 'transparent',
    height: 50,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 100,
    width: '80%',
  },
  welcome: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 24,
    margin: 12,
    marginBottom: 15,
    marginTop: 0,
    padding: 10,
  },
});
