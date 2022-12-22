// In the React Native app
import { useState } from 'react';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import _themeColor from '../colorScheme.json';
import { useFonts } from 'expo-font';
export default function LoginScreen() {
  const [jwt, setJWT] = useState(null); // JWT state
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('../assets/fonts/Karla/Karla-Regular.ttf'),
    'Karla-Medium': require('../assets/fonts/Karla/Karla-Medium.ttf'),
    'Karla-Bold': require('../assets/fonts/Karla/Karla-Bold.ttf')
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
        <ImageBackground
          source={require('../assets/other/pattern_japanese-pattern-3_1_2_0-0_0_1__4bfb9d_ffffff.png')}
          style={styles.backgroundImage}
        >
          <SafeAreaView>
            <View style={styles.container}>
            <Text style={styles.welcome}>Welcome Back</Text>
            <Text style={styles.label}>Email or Username</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="useless placeholder"
                keyboardType="numeric"
              />
              
              <TouchableOpacity
                title="Login"
                onPress={()=>{navigation.navigate('Forgot');}}
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
              onPress={login}
              style={styles.transparentButton}
              underlayColor={_themeColor.primary}
            >
              <Text style={styles.loginText}>Create a new account</Text>
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
  transparentButton: {
    backgroundColor: _themeColor.white,
    borderWidth: 2,
    borderColor:_themeColor.primary,
    width: '80%',
    height:50,
    marginRight:40,
    marginLeft:40,
    borderRadius:25,
    justifyContent:'center',
    marginTop:20
  },
  button: {
    backgroundColor: _themeColor.primary,
    
    
    width: '80%',
    height:50,
    marginRight:40,
    marginLeft:40,
    marginTop:60,
    borderRadius:25,
    justifyContent:'center',
    shadowColor: _themeColor.primary,
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
  },
  loginText:{
    color: _themeColor.secondary,
    fontSize: 18,
    fontFamily: 'Karla-Bold',
    textAlign:'center',
   
    
}
,
  container: {
    backgroundColor: _themeColor.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 100,
    paddingTop: 50,
    paddingBottom: 300,
  },
  forgot: {
    backgroundColor: _themeColor.white,
    margin: 12,
    padding: 10,
    fontFamily: 'Karla-Regular'
  },
  forgotText: {
    color: _themeColor.secondary,
    
    fontFamily: 'Karla-Regular',
    fontSize:18
  },
  input: {
    borderColor: _themeColor.gray,
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    margin: 12,
    padding: 10,
    fontFamily: 'Karla-Medium'
  },
  welcome: {
    color: _themeColor.secondary,
    padding: 10,
   margin:12,
   fontSize:18,
   fontFamily: 'Karla-Regular'
  },
  label: {
    color: _themeColor.darkGray,
    paddingLeft: 10,
    paddingRight: 10,
   marginLeft:12,
   marginRight:12,
   fontFamily: 'Karla-Regular'
  },
});
