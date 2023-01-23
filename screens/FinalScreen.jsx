import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import { useFonts } from 'expo-font';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import _themeColor from '../colorScheme.json';

export default function FinalScreen() {
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('../assets/fonts/Karla/KarlaRegular.ttf'),
    'Karla-Medium': require('../assets/fonts/Karla/KarlaMedium.ttf'),
    'Karla-Bold': require('../assets/fonts/Karla/KarlaBold.ttf'),
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Success</Text>
      <View style={styles.document}>
        <Video
          style={styles.idImage}
          source={require('../assets/video/19231-payment-successful.mp4')}
          useNativeControls={false}
          resizeMode="contain"
          isLooping
          shouldPlay
        />

        <Text style={styles.label}>
          We have received your deposit we will look at it and get back to you within 3 hours
        </Text>
        <TouchableOpacity
          style={styles.transparentButton}
          onPress={() => {
            navigation.navigate('Help');
          }}
        >
          <Text style={styles.danger}>Go to Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Login"
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.button}
          underlayColor={_themeColor.primary}
        >
          <Text style={styles.loginText}>Go back to home</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'center',
    // marginLeft: 10,
    // marginRight: 30,
    marginBottom: 30,
    marginTop: 10,
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
  },
  danger: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    textAlign: 'center',
  },

  document: {
    alignItems: 'center',
  },

  idImage: {
    borderRadius: 18,
    height: 250,
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
  transparentButton: {
    backgroundColor: 'transparent',
    height: 50,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    width: '80%',
  },
  welcome: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 24,
    margin: 12,
    marginTop: 15,
    padding: 10,
  },
});
