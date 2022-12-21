// In the React Native app
import { useState } from 'react';
import {
  Button, ImageBackground, SafeAreaView, View
} from 'react-native';
import tailwind from 'tailwind-rn';

export default function LoginScreen() {
  const [jwt, setJWT] = useState(null); // JWT state
  const styles = StyleSheet.create({

    container: {
      backgroundColor: '#ecf0f1',
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      padding: 8,
    },
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 24,
      textAlign: 'center',
    },
  });
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

        	<SafeAreaView style={tailwind('h-100 bg-white')}>
          <ImageBackground source={require('../assets/other/pattern_japanese-pattern-3_1_2_0-0_0_1__4bfb9d_ffffff.png')} style={{ width: '100%', height: '100%', position: 'relative' }}>
            <View style={tailwind('position-absolute z-10 inset-0  bg-black  ')}>
              <Button title="Login" onPress={login} style={styles.container} />
              <Button title="Login" onPress={login} style={styles.container} />
            </View>
          </ImageBackground>
         </SafeAreaView>

      )}
    </View>
  );
}
