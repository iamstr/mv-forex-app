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

import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import Exchanger from '../assets/icons/Group 2686.svg';
import Kenya from '../assets/other/icons8-kenya-48.png';
import Nigeria from '../assets/other/icons8-nigeria-circular-48.png';
import _themeColor from '../colorScheme.json';

export default function HomeScreen() {
  const [currency, setCurrency] = useState(1);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef();
  const navigation = useNavigation();
  return (
    <View style={styles.document}>
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
                        navigation.navigate('Deposit');
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
    borderRadius: 10,
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
  header: {
    backgroundColor: _themeColor.white,
    borderBottomColor: _themeColor.gray,
    borderBottomWidth: 0.5,
    paddingBottom: 15,
    paddingHorizontal: 15,
    shadowColor: '#ccc',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 28,
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
  transaction: { marginHorizontal: 15, marginVertical: 35 },
  transactionAmount: { fontFamily: 'Karla-Regular', fontSize: 16 },
  transactionCard: {
    backgroundColor: _themeColor.white,
    borderRadius: 20,
    elevation: 13,
    marginTop: 10,
    padding: 20,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,

    shadowRadius: 28,
  },
  transactionDate: { color: _themeColor.darkGray, fontFamily: 'Karla-Regular', fontSize: 13 },

  transactionDetail: { paddingLeft: 17 },
  transactionHeader: { fontFamily: 'Karla-Regular', fontSize: 15 },
  transactionHeaderButton: {
    fontFamily: 'Karla-Regular',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  transactionHeaderContainer: { marginBottom: 20 },
  transactionImg: { borderRadius: '50%', height: 42, width: 42 },
  transactionName: {
    fontFamily: 'Karla-Regular',
    fontSize: 16,
    paddingBottom: 5,
    textTransform: 'uppercase',
  },
  video: {
    borderRadius: 18,
    height: 150,
    // marginTop: 70,
    width: 150,
  },
  videoContainer: { alignItems: 'center' },
});
