// In the React Native app
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import _themeColor from '../colorScheme.json';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/userContext';
import useCredential from '../hooks/useCredentials';
import useToken from '../hooks/useToken';

export default function LoginScreen() {
  const { saveToken, isLoggedIn } = useContext(AuthContext);
  const [jwt, setJWT] = useState(null); // JWT state
  const [username, setUsername] = useState(); // JWT state
  const [password, setPassword] = useState(); // JWT state
  const { credential, setCredential, getCredential } = useCredential();
  const { token, setToken } = useToken();
  const user = useContext(UserContext);

  const navigation = useNavigation();
  useEffect(() => {
    const setCredentialsFromSecure = async () => {
      await setUsername(credential?.username);
      await setPassword(credential?.password);
    };

    setCredentialsFromSecure();
  }, [credential]);
  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Home');
    }
  }, [isLoggedIn]);
  const login = async () => {
    // // Send a login request to the Node.js server
    // fetch('https://example.com/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username: 'user1',
    //     password: 'password123',
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Save the JWT locally, such as in the device's local storage
    //
    //   });
    await setCredential({ username, password });
    saveToken({ username, password });
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
    <ImageBackground
      source={require('../assets/other/pattern_japanese-pattern-3_1_2_0-0_0_1__4bfb9d_ffffff.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.label}>Email or Username</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity
            title="Login"
            onPress={() => {
              navigation.navigate('Forgot');
            }}
            style={styles.forgot}
            underlayColor={_themeColor.primary}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Login"
            onPress={login}
            style={styles.button}
            underlayColor={_themeColor.primary}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            title="Login"
            onPress={() => {
              navigation.navigate('Signup');
            }}
            style={styles.transparentButton}
            underlayColor={_themeColor.primary}
          >
            <Text style={styles.loginText}>Create a new account</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
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
    height: '100%',
    marginTop: 80,
    // paddingBottom: 300,
    // paddingTop: 50,
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
  scrollView: {
    height: 2000,
    paddingBottom: 30,
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
    paddingTop: 20,
  },
});
