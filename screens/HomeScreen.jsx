/* eslint-disable react/react-in-jsx-scope */
import { useFonts } from 'expo-font';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Video } from 'expo-av';
import { useRef, useState } from 'react';
import Exchanger from '../assets/icons/Group 2686.svg';
import Kenya from '../assets/other/icons8-kenya-48.png';
import Nigeria from '../assets/other/icons8-nigeria-circular-48.png';
import _themeColor from '../colorScheme.json';

export default function HomeScreen() {
  const [currency, setCurrency] = useState(1);
  const [isFocused, setIsFocused] = useState(false);
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('../assets/fonts/Karla/KarlaRegular.ttf'),
    'Karla-Medium': require('../assets/fonts/Karla/KarlaMedium.ttf'),
    'Karla-Bold': require('../assets/fonts/Karla/KarlaBold.ttf'),
  });
  const inputRef = useRef();
  return (
    <View style={styles.document}>
      <View
        style={[
          styles.rowBetween,
          { backgroundColor: _themeColor.primary, paddingHorizontal: 15, paddingBottom: 10 },
        ]}
      >
        <Ionicons name="notifications" size={28} color={_themeColor.green} />
        <Text style={styles.name}>Hello Joe Doe</Text>
        <Ionicons name="log-out" size={32} color={_themeColor.green} />
      </View>
      <View style={styles.container}>
        <ScrollView>
          <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={70}>
              <View style={styles.card}>
                <Text style={styles.today}>Today exchange rate</Text>
                <Text style={styles.exchange}>1KES = 5.60 NGN</Text>
                <View style={styles.rowAround}>
                  <View style={styles.currencyBox}>
                    <Text style={styles.from}>From</Text>
                    <Image source={Kenya} />
                    <Text style={styles.currency}>KES</Text>
                  </View>
                  <Exchanger />
                  <View style={styles.currencyBox}>
                    <Text style={styles.from}>TO</Text>
                    <Image source={Nigeria} />
                    <Text style={styles.currency}>NGN</Text>
                  </View>
                </View>

                {currency.length > 0 && currency != 0 && (
                  <View style={styles.currencyView}>
                    <Text style={styles.amount}>{currency}</Text>
                    <Text style={styles.convert}>NGN</Text>
                  </View>
                )}

                <View style={styles.inputView}>
                  <TextInput
                    style={[styles.input, isFocused && styles.inputFocused]}
                    onChangeText={(text) => setCurrency(text)}
                    keyboardType="numeric"
                    placeholder="Exchange amount"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                      setIsFocused(false);
                    }}
                  />
                  {currency.length > 0 && currency != 0 && (
                    <TouchableOpacity
                      title="Login"
                      onPress={() => {
                        navigation.navigate('Home');
                      }}
                      style={styles.button}
                      underlayColor={_themeColor.primary}
                    >
                      <Text style={styles.loginText}>Exchange </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </KeyboardAvoidingView>
          </Pressable>
          <View style={styles.videoContainer}>
            <Video
              style={styles.video}
              source={require('../assets/video/lf30_editor_8te1fuzs.mp4')}
              useNativeControls={false}
              resizeMode="contain"
              isLooping
              shouldPlay
            />
            <Text style={styles.exchange}>Transaction History empty</Text>
            <TouchableOpacity
              title="Login"
              onPress={() => {
                navigation.navigate('Home');
              }}
              style={styles.button}
              underlayColor={_themeColor.primary}
            >
              <Text style={styles.loginText}>Go to Home Screen</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amount: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 32,
    paddingBottom: 20,
    paddingTop: 15,
    textAlign: 'center',
  },
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
  card: {
    backgroundColor: _themeColor.white,
    borderRadius: 5,
    elevation: 13,
    marginHorizontal: 15,
    marginVertical: 30,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,

    shadowRadius: 28,
    // width: '100%',
  },
  container: {
    backgroundColor: _themeColor.white,
    flex: 1,
    // height: 2000,
    justifyContent: 'center',
  },
  convert: {
    color: _themeColor.darkGray,
    fontFamily: 'Karla-Bold',
    fontSize: 16,
    paddingBottom: 20,
    paddingTop: 15,
    textAlign: 'center',
  },
  currency: {
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 17,
    paddingBottom: 7,
    paddingTop: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  currencyBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyView: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  document: { backgroundColor: _themeColor.primary, flex: 1 },
  exchange: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 18,
    paddingBottom: 20,
    textAlign: 'center',
  },
  from: {
    color: _themeColor.darkGray,
    fontFamily: 'Karla-Medium',
    fontSize: 12,
    paddingBottom: 7,
    paddingTop: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  input: {
    borderColor: _themeColor.gray,
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: 'Karla-Medium',
    height: 50,
    justifyContent: 'center',
    margin: 12,
    padding: 10,
    width: '80%',
  },
  inputFocused: {
    borderColor: _themeColor.green,
  },
  inputView: { alignItems: 'center', marginBottom: 30 },
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    // marginLeft: 30,
    textAlign: 'center',
  },
  name: { color: _themeColor.green, fontFamily: 'Karla-Medium', fontSize: 24 },
  rowAround: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' },
  rowBetween: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  today: {
    color: _themeColor.gray,
    fontFamily: 'Karla-Bold',
    fontSize: 16,
    paddingVertical: 15,
    textAlign: 'center',
  },
  video: {
    borderRadius: 18,
    height: 150,
    // marginTop: 70,
    width: 150,
  },
  videoContainer: { alignItems: 'center' },
});
