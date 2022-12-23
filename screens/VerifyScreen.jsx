// In the React Native app
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import _themeColor from '../colorScheme.json';

export default function LoginScreen() {
  const [jwt, setJWT] = useState(null); // JWT state
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('../assets/fonts/Karla/Karla-Regular.ttf'),
    'Karla-Medium': require('../assets/fonts/Karla/Karla-Medium.ttf'),
    'Karla-Bold': require('../assets/fonts/Karla/Karla-Bold.ttf'),
  });
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
      {jwt ? (
        getProtectedData()
      ) : (
        
          <SafeAreaView style={{backgroundColor:_themeColor.white,height:'100%'}}>
            <View style={styles.container}>
              <Text style={styles.welcome}>Let's verify  your identity</Text>
              <Text style={styles.label}>Choose the document you have</Text>
             
              
             
              <TouchableOpacity
                title="Login"
                onPress={login}
                style={styles.button}
                underlayColor={_themeColor.primary}
              >
                <Text style={styles.loginText}>Continue</Text>
              </TouchableOpacity>
            
            </View>
          </SafeAreaView>
        
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: { height: '100%', position: 'relative', width: '100%' },
  button: {
    backgroundColor: _themeColor.white,

    borderRadius: 25,
    elevation: 12,
    height: 90,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 30,
    marginTop: 100,
    shadowColor: _themeColor.gray,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    width: '95%',
  },
  container: {
    backgroundColor: _themeColor.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
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
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize:18
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
    fontFamily: 'Karla-Medium',
    fontSize: 20,
    margin: 12,
    padding: 10,
    marginBottom:15,
    marginTop:0
  },
});
