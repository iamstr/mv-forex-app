// In the React Native app
import { useNavigation } from '@react-navigation/native';
import jwt_decode from 'jwt-decode';
import { useContext, useState } from 'react';
import {
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _themeColor from '../colorScheme.json';
import CustomActivityIndicator from '../components/ActivityIndicator';
import _Config from '../config.json';
import { AuthContext } from '../contexts/AuthContext';

export default function LoginScreen() {
  const { saveToken, saveSignedInUser } = useContext(AuthContext);
  const [username, setUsername] = useState(); // JWT state
  const [password, setPassword] = useState(); // JWT state
  const [response, setResponse] = useState({ message: 'success', code: 200 }); // JWT state
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const login = async () => {
    setIsLoading(true);
    // Send a login request to the Node.js server
    setResponse({ message: 'success', code: 200 });
    if (username && password) {
      fetch(`${_Config.api}/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password,
        }),
      })
        .then((responseOb) => responseOb.json())
        .then((data) => {
          // Save the JWT locally, such as in the device's local storage
          setIsLoading(false);
          console.log(data);
          if (data.token) {
            const decodedToken = jwt_decode(data.token);
            saveSignedInUser(decodedToken);
            saveToken({ username, password });
          }
          if (+data.code !== 200) setResponse(data);
        })
        .catch((e) => {
          console.log('the error is', e);
        });
    }
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
            style={[styles.input, response.code !== 200 ? styles.error : null]}
            placeholder="useless placeholder"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={[styles.input, response.code !== 200 ? styles.error : null]}
            placeholder="useless placeholder"
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          {response.code !== 200 && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 13,
                paddingBottom: 10,
              }}
            >
              <Ionicons
                name="alert-circle-outline"
                size={26}
                color={_themeColor.danger}
                style={styles.error}
              />
              <Text style={styles.erroMessage}>Incorrect username/password</Text>
            </View>
          )}
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
          <Modal animationType="fade" transparent visible={isLoading}>
            <CustomActivityIndicator isLoading={isLoading} />
          </Modal>
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
  erroMessage: { color: _themeColor.danger, fontFamily: 'Karla-Medium' },
  error: {
    borderColor: _themeColor.danger,
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
