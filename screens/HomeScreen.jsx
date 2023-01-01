import { useFonts } from 'expo-font';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef, useState } from 'react';
import Exchanger from '../assets/icons/Group 2686.svg';
import Kenya from '../assets/other/icons8-kenya-48.png';
import Nigeria from '../assets/other/icons8-nigeria-circular-48.png';
import _themeColor from '../colorScheme.json';

export default function HomeScreen() {
  const [currency, setCurrency] = useState(0.0);
  const [isFocused, setIsFocused] = useState(false);
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('../assets/fonts/Karla/KarlaRegular.ttf'),
    'Karla-Medium': require('../assets/fonts/Karla/KarlaMedium.ttf'),
    'Karla-Bold': require('../assets/fonts/Karla/KarlaBold.ttf'),
  });
  const inputRef = useRef();
  return (
    <SafeAreaView style={styles.document}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1, height: 1500 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.rowBetween}>
              <Ionicons name="notifications" size={28} color={_themeColor.green} />
              <Text style={styles.name}>Hello Joe Doe</Text>
              <Ionicons name="log-out" size={32} color={_themeColor.green} />
            </View>
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
              </View>
              <View style={styles.currencyView}>
                <Text style={styles.amount}>{currency}</Text>
                <Text style={styles.convert}>NGN</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  amount: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 28,
    paddingBottom: 20,
    paddingTop: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: _themeColor.white,
    borderRadius: 5,

    elevation: 13,
    marginVertical: 30,

    shadowColor: 'rgba(0,0,0,.4)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowOpacity: 0.39,

    shadowRadius: 28,
    shadowRadius: 8.3,
    width: '100%',
  },
  container: { paddingHorizontal: 15 },
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
  document: { backgroundColor: _themeColor.white, flex: 1 },
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
  inputView: { alignItems: 'center' },
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
});
