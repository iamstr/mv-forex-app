// In the React Native app
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Chevron from '../assets/icons/Path.svg';
import LiveSupport from '../assets/other/chat.png';
import Phone from '../assets/other/phone-call.png';
import Telegram from '../assets/other/telegram.png';
import WhatsApp from '../assets/other/whatsapp.png';
import _themeColor from '../colorScheme.json';

const _webChatHandlerAsync = async () => {
  const result = await WebBrowser.openBrowserAsync(
    'https://tawk.to/chat/5ca0b80d6bba4605280089c0/default',
  );
};
const _linkOpener = (link) => {
  Linking.openURL(link);
};
export default function LoginScreen() {
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
        <SafeAreaView style={{ backgroundColor: _themeColor.white, height: '100%' }}>
          <View style={styles.container}>
            <ScrollView>
              <Text style={styles.welcome}>Customer Support</Text>
              <Text style={styles.label}>
                Select your preferred support channel for various issues
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
                  <Image width={25} height={50} style={styles.document} source={LiveSupport} />
                  <Text style={styles.loginText}>Live chat support</Text>
                </View>

                <Chevron />
              </TouchableOpacity>
              <TouchableOpacity
                title="Login"
                onPress={() => {
                  _linkOpener('https://wa.link/erd6qv');
                }}
                style={styles.button}
                underlayColor={_themeColor.primary}
              >
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Image width={25} height={50} style={styles.document} source={WhatsApp} />
                  <Text style={styles.loginText}>Contact us throught WhatsApp</Text>
                </View>

                <Chevron />
              </TouchableOpacity>
              <TouchableOpacity
                title="Login"
                onPress={() => {
                  _linkOpener('https://msng.link/o/?iamsatar=tg');
                }}
                style={styles.button}
                underlayColor={_themeColor.primary}
              >
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Image width={25} height={50} style={styles.document} source={Telegram} />
                  <Text style={styles.loginText}>Contact us throught Telegram</Text>
                </View>

                <Chevron />
              </TouchableOpacity>
              <TouchableOpacity
                title="Login"
                onPress={() => {
                  _linkOpener('tel://0708693536');
                }}
                style={styles.button}
                underlayColor={_themeColor.primary}
              >
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Image width={25} height={50} style={styles.document} source={Phone} />
                  <Text style={styles.loginText}>Give us a phone call</Text>
                </View>

                <Chevron />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </SafeAreaView>
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
    marginTop: 20,
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
    fontSize: 18,
    marginBottom: 15,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 17,
    paddingLeft: 25,
    textAlign: 'center',
  },

  welcome: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 20,
    margin: 12,
    marginBottom: 15,
    marginTop: 40,
    padding: 10,
  },
});
