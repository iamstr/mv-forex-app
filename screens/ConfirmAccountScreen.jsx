import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import _themeColor from '../colorScheme.json';

export default function ConfirmAcoountScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: _themeColor.white, height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.document}>
          <Video
            style={styles.idImage}
            source={require('../assets/video/42364-e-mail.mp4')}
            useNativeControls={false}
            resizeMode="contain"
            isLooping
            shouldPlay
          />
          <Text style={styles.welcome}>Check your email</Text>
          <Text style={styles.label}>We have sent you an OTP code, please verify your account</Text>
          <TouchableOpacity
            title="Login"
            onPress={() => {
              navigation.navigate('OTP');
            }}
            style={styles.button}
            underlayColor={_themeColor.primary}
          >
            <Text style={styles.loginText}>I have the code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
    justifyContent: 'center',
    // marginLeft: 10,
    // marginRight: 30,
    marginBottom: 30,
    marginTop: 30,
    paddingHorizontal: 20,
    shadowColor: _themeColor.gray,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    width: '90%',
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
    borderRadius: 18,
    height: 350,
    // marginTop: 70,
    width: 320,
  },

  label: {
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    lineHeight: 27,
    marginBottom: 30,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },

  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    // marginLeft: 30,
    textAlign: 'center',
  },
  welcome: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 24,
    margin: 12,
    marginBottom: 15,
    marginTop: 0,
    padding: 10,
  },
});
