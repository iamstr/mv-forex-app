// In the React Native app
import React, { useState } from 'react';
import { Button, Text, View,SafeAreaView,ImageBackground } from 'react-native';
import {useTailwind} from 'tailwind-rn';
export default function LoginScreen ()  {
  const [jwt, setJWT] = useState(null); // JWT state
const tailwind = useTailwind();
  const login = () => {
    // Send a login request to the Node.js server
    fetch('https://example.com/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'user1',
        password: 'password123'
      })
    })
      .then(response => response.json())
      .then(data => {
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
        Authorization: `Bearer ${jwt}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        navigation.navigate('Home')
      });
  };

  return (
    <View>
      {jwt ? (
        getProtectedData()
      ) : (


        	<SafeAreaView style={tailwind('h-full')}>
    <ImageBackground source={require('./assets/pattern_japanese-pattern-3_1_2_0-0_0_1__4bfb9d_ffffff@2x.png')} style={{width: '100%', height: '100%',position:'relative'}}>
		<View style={tailwind('position-absolute z-10 inset-0 bg-white rounded-r-3xl rounded-l-3xl')}>
		 <Button title="Login" onPress={login} />
		</View>
    </ImageBackground>
	</SafeAreaView>
      
       
        
      )}
    </View>
  );
};
