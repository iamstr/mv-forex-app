// In the React Native app
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function LoginScreen ()  {
  const [jwt, setJWT] = useState(null); // JWT state

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
        <View>
        <Button title="Login" onPress={login} />
        </View>
      )}
    </View>
  );
};
