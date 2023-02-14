// In the React Native app
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _themeColor from '../colorScheme.json';

export default function SignupScreen() {
  const { height } = useWindowDimensions();
  const [fullname, setFullname] = useState(null); // JWT state
  const [email, setEmail] = useState(null); // JWT state
  const [mobile, setMobile] = useState(null); // JWT state
  const [password, setPassword] = useState(null); // JWT state
  const [confirmPassword, setConfirmPassword] = useState(null); // JWT state
  const navigation = useNavigation();
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
      <View style={(styles.backgroundImage, height)}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.welcome} />
            <Text style={styles.label}>What is your full name?</Text>
            <TextInput
              style={styles.input}
              placeholder="John Doe"
              onChangeText={(text) => {
                setFullname(text);
              }}
            />
            <Text style={styles.label}>What is your email address</Text>
            <TextInput
              style={styles.input}
              placeholder="johndoe@mail.com"
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.label}>What is your mobile number</Text>
            <TextInput
              style={styles.input}
              placeholder="johndoe@mail.com"
              onChangeText={(text) => setMobile(text)}
            />
            <Text style={styles.label}>Set your password</Text>
            <TextInput
              style={styles.input}
              placeholder="*********"
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            <Text style={styles.label}>Confirm your password</Text>
            <TextInput
              style={styles.input}
              placeholder="*********"
              onChangeText={(text) => {
                setConfirmPassword(text);
              }}
            />
            {confirmPassword !== password && confirmPassword && password && (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons
                  name="alert-circle-outline"
                  size={26}
                  color={_themeColor.danger}
                  style={styles.error}
                />
                <Text style={styles.erroMessage}>The passwords are not same</Text>
              </View>
            )}
            {fullname && email && mobile && password && confirmPassword && (
              <TouchableOpacity
                title="Login"
                onPress={() => {
                  if (password === confirmPassword) {
                    navigation.navigate('Terms');
                  }
                }}
                style={styles.button}
                underlayColor={_themeColor.primary}
              >
                <Text style={styles.loginText}>Create account</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: { position: 'relative', width: '100%' },
  button: {
    backgroundColor: _themeColor.primary,

    borderRadius: 25,
    elevation: 12,
    height: 50,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
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
    marginTop: -40,
    paddingBottom: 300,
    paddingTop: 50,
  },
  erroMessage: { color: _themeColor.danger, fontFamily: 'Karla-Medium' },
  error: {
    marginHorizontal: 12,
    paddingHorizontal: 10,
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
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 18,
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
    backgroundColor: 'transparent',
    height: '100%',
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
    fontFamily: 'Karla-Medium',
    fontSize: 20,
    margin: 12,
    marginBottom: 10,
    marginTop: 0,
    padding: 10,
  },
});
