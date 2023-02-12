// In the React Native app
import { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import _themeColor from '../colorScheme.json';

export default function LoginScreen() {
  const [jwt, setJWT] = useState(null); // JWT state

  const login = () => {
    // Send a login request to the Node.js server
    fetch('https://example.com/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'user1',
        password: 'password123',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Save the JWT locally, such as in the device's local storage
        saveJWT(data.token);
        setJWT(data.token);
      });
  };

  const getProtectedData = () => {
    // Make a request to the protected route on the Node.js server
    const jwt = getJWT(); // Retrieve the JWT from local storage
    fetch('https://example.com/protected-route', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        navigation.navigate('Home');
      });
  };

  return (
    <View>
      {jwt ? (
        getProtectedData()
      ) : (
        <ImageBackground
          source={require('../assets/other/pattern_japanese-pattern-3_1_2_0-0_0_1__4bfb9d_ffffff.png')}
          style={styles.backgroundImage}
        >
          <SafeAreaView>
            <View style={styles.container}>
              <Text style={styles.welcome}>Enter your email to reset your password</Text>

              <TextInput style={styles.input} placeholder="joe@mail.com" />

              <TouchableOpacity
                title="Login"
                onPress={login}
                style={styles.button}
                underlayColor={_themeColor.primary}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: { height: '100%', position: 'relative', width: '100%' },
  button: {
    backgroundColor: _themeColor.primary,

    borderRadius: 25,
    elevation: 12,
    height: 50,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 60,
    shadowColor: _themeColor.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    width: '80%',
  },
  container: {
    backgroundColor: _themeColor.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 150,
    paddingBottom: 300,
    paddingTop: 50,
  },
  forgot: {
    backgroundColor: _themeColor.white,
    fontFamily: 'Karla-Regular',
    margin: 12,
    padding: 10,
  },
  forgotText: {
    color: _themeColor.secondary,

    fontFamily: 'Karla-Regular',
    fontSize: 18,
  },
  input: {
    borderColor: _themeColor.gray,
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: 'Karla-Medium',
    height: 50,
    margin: 12,
    padding: 10,
  },
  label: {
    color: _themeColor.darkGray,
    fontFamily: 'Karla-Regular',
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  transparentButton: {
    backgroundColor: _themeColor.white,
    borderColor: _themeColor.primary,
    borderRadius: 25,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    width: '80%',
  },
  welcome: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    margin: 12,
    padding: 10,
  },
});
