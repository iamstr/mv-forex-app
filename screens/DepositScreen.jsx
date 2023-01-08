// In the React Native app
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Chevron from '../assets/icons/Path.svg';
import Bank from '../assets/other/bank_channel.png';
import Phone from '../assets/other/phone_channel.png';
import _themeColor from '../colorScheme.json';

const _webChatHandlerAsync = async () => {
  const result = await WebBrowser.openBrowserAsync(
    'https://tawk.to/chat/5ca0b80d6bba4605280089c0/default',
  );
};
const _linkOpener = (link) => {
  Linking.openURL(link);
};
export default function ChannelScreen() {
  const [jwt, setJWT] = useState(null); // JWT state

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
        <View style={{ backgroundColor: _themeColor.white, height: '100%' }}>
          <View style={styles.container}>
            <ScrollView>
              <Text style={styles.welcome}>Deposit account</Text>
              <Text style={styles.label}>
                Make the deposit to any of the following account and the money would be transferred
                to the reciepent
                {' '}
              </Text>
              <TouchableOpacity
                title="Login"
                onPress={_webChatHandlerAsync}
                style={styles.button}
                underlayColor={_themeColor.primary}
              >
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Image width={25} height={50} style={styles.document} source={Phone} />
                  <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.loginText}>Mobile Money Transfer</Text>
                  </View>
                </View>

                <Chevron />
              </TouchableOpacity>
              <TouchableOpacity
                title="Login"
                onPress={_webChatHandlerAsync}
                style={styles.button}
                underlayColor={_themeColor.primary}
              >
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Image width={25} height={50} style={styles.document} source={Bank} />
                  <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.loginText}> Bank Transfer</Text>
                  </View>
                </View>

                <Chevron />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: _themeColor.white,
    borderRadius: 25,
    elevation: 12,
    flexDirection: 'row',
    height: 90,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 30,
    marginTop: 40,
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
    flex: 1,
    height: '100%',
    // paddingBottom: 300,
  },
  document: {},

  label: {
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 50,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 16,
    paddingLeft: 25,
    textAlign: 'center',
  },
  subText: {
    color: _themeColor.darkGray,
    fontFamily: 'Karla-Regular',
    fontSize: 13,
    paddingLeft: 25,
    paddingTop: 7,
    textAlign: 'center',
  },

  welcome: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 22,
    margin: 12,
    marginBottom: 15,
    marginTop: 60,
    padding: 10,
  },
});
