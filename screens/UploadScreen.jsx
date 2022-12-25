// In the React Native app
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import {
  Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import _themeColor from '../colorScheme.json';

export default function LoginScreen() {
  const [jwt, setJWT] = useState(null); // JWT state
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('../assets/fonts/Karla/KarlaRegular.ttf'),
    'Karla-Medium': require('../assets/fonts/Karla/KarlaMedium.ttf'),
    'Karla-Bold': require('../assets/fonts/Karla/KarlaBold.ttf'),
  });
  const navigation = useNavigation();
  // ...rest of the import statements remain unchanged

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // console.log(result.uri);
      setSelectedImage(result.uri);
    } else {
      alert('You did not select any image.');
    }
  };

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
        <SafeAreaView style={{ backgroundColor: _themeColor.white, height: '100%' }}>
          <View style={styles.container}>
            <Text style={styles.welcome}>Let's verify your identity</Text>
            <Text style={styles.label}>Upload the front side of your national ID</Text>
            <View style={styles.document}>
              <Image
                source={
                  selectedImage !== null
                    ? { uri: selectedImage }
                    : require('../assets/other/card.png')
                }
                style={styles.idImage}
              />
              <TouchableOpacity
                title="Login"
                onPress={pickImageAsync}
                style={styles.button}
                underlayColor={_themeColor.primary}
              >
                {/**
            <SvgXml width="50" height="20" xml={Attach} />
            */}
                <Text style={styles.loginText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: _themeColor.primary,
    borderRadius: 25,
    elevation: 12,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-evenly',
    // marginLeft: 10,
    // marginRight: 30,
    marginTop: 50,
    paddingHorizontal: 20,
    shadowColor: _themeColor.gray,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    width: '95%',
  },
  chevron: {},
  container: {
    backgroundColor: _themeColor.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingBottom: 300,
    paddingTop: 50,
  },
  document: {
    alignItems: 'center',
  },

  idImage: {
    marginTop: 70,
  },
  label: {
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    marginBottom: 50,
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

  welcome: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 20,
    margin: 12,
    marginBottom: 15,
    marginTop: 0,
    padding: 10,
  },
});
