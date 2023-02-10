/* eslint-disable react/react-in-jsx-scope */
import { useFonts } from 'expo-font';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import { useEffect, useRef, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Exchanger from '../assets/icons/Group 2686.svg';
import Kenya from '../assets/other/icons8-kenya-48.png';
import Nigeria from '../assets/other/icons8-nigeria-circular-48.png';
import _themeColor from '../colorScheme.json';
import Toast from '../components/Toast';

const serverData = { from: 'KES', to: 'NGN', rate: 3.68 };
export default function HomeScreen() {
  const [currency, setCurrency] = useState(100);
  const [currencyFrom, setCurrencyFrom] = useState({ currencyName: 'KES', currencyFlag: Kenya });
  const [currencyTo, setCurrencyTo] = useState({ currencyName: 'NGN', currencyFlag: Nigeria });
  const [hideCurrency, setHideCurrency] = useState({ currencyName: 'NGN', currencyFlag: Nigeria });
  const [exchangeRate, setExchangeRate] = useState(serverData);
  const [showToast, setShowToast] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState({ visible: false, hideCurrency: '' });
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('../assets/fonts/Karla/KarlaRegular.ttf'),
    'Karla-Medium': require('../assets/fonts/Karla/KarlaMedium.ttf'),
    'Karla-Bold': require('../assets/fonts/Karla/KarlaBold.ttf'),
  });
  const navigation = useNavigation();
  const inputRef = useRef();
  useEffect(() => {
    if (currencyFrom.currencyName === currencyTo.currencyName) {
      setShowToast(true);
    }
    if (currencyFrom.currencyName !== currencyTo.currencyName) setShowToast(false);
  }, [currencyFrom, currencyTo]);

  const toggleModalHandler = (hide = null) => {
    setModalVisible((prevState) => ({
      hideCurrency: hide,
      visible: !prevState.visible,
    }));
  };
  const toggleCurrencyHandler = (state, show = null) => {
    toggleModalHandler(show);
    setHideCurrency(state);
    if (modalVisible.hideCurrency === 'to') setCurrencyTo(state);
    if (modalVisible.hideCurrency === 'from') setCurrencyFrom(state);
  };
  const setCurrencyHandler = (state) => {
    setHideCurrency(state);
    if (modalVisible.hideCurrency === 'to') setCurrencyTo(state);
    if (modalVisible.hideCurrency === 'from') setCurrencyFrom(state);

    toggleModalHandler();
  };
  const changeHandler = function (text) {
    if (text === '' || text.length <= 1 || text === 0) {
      setCurrency(Math.floor(parseFloat(exchangeRate.rate) * parseFloat(100)));
      console.log('here is hte currency', currency);
    } else {
      console.log('does it change ,the  currency', currency);
      setCurrency(Math.floor(parseFloat(exchangeRate.rate) * parseFloat(text)));
    }
    setCurrency(Math.floor(parseFloat(exchangeRate.rate) * parseFloat(text)));
  };

  const filtered = [
    { currencyName: 'KES', currencyFlag: Kenya },
    { currencyName: 'NGN', currencyFlag: Nigeria },
  ].filter((filter) => filter.currencyName !== hideCurrency.currencyName);
  return (
    <View style={styles.document}>
      <Toast show={showToast} message="you cant exchange the same currency" />
      <View style={styles.container}>
        <ScrollView>
          <Modal
            animationType="slide"
            visible={modalVisible.visible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              toggleModalHandler();
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Text style={styles.exchangeModal}>Select Currency</Text>
                  <Pressable
                    onPress={() => {
                      toggleModalHandler();
                    }}
                  >
                    <Ionicons name="close-circle" size={26} color={_themeColor.gray} />
                  </Pressable>
                </View>
                <View style={{ marginTop: 50 }}>
                  {filtered.map((singleCurrency, index) => (
                    <Pressable
                      key={index}
                      onPress={() => {
                        setCurrencyHandler(singleCurrency);
                      }}
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 50,
                        marginBottom: 100,
                      }}
                    >
                      <Image source={singleCurrency.currencyFlag} />
                      <Text style={[styles.currency, { paddingBottom: 27, paddingLeft: 20 }]}>
                        {singleCurrency.currencyName}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            </View>
          </Modal>
          <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={70}>
              <View style={styles.card}>
                <Text style={styles.today}>Today exchange rate</Text>
                <Text style={styles.exchange}>
                  1
                  {exchangeRate.from}
                  {' '}
                  =
                  {' '}
                  {exchangeRate.rate}
                  {' '}
                  {exchangeRate.to}
                </Text>
                <View style={styles.rowAround}>
                  <Pressable
                    style={styles.currencyBox}
                    onPress={() => {
                      toggleCurrencyHandler(currencyFrom, 'from');
                    }}
                  >
                    <Text style={styles.from}>From</Text>
                    <Image source={currencyFrom.currencyFlag} />
                    <Text style={styles.currency}>{currencyFrom.currencyName}</Text>
                  </Pressable>
                  <Exchanger />
                  <Pressable
                    style={styles.currencyBox}
                    onPress={() => {
                      toggleCurrencyHandler(currencyTo, 'to');
                    }}
                  >
                    <Text style={styles.from}>TO</Text>
                    <Image source={currencyTo.currencyFlag} />
                    <Text style={styles.currency}>{currencyTo.currencyName}</Text>
                  </Pressable>
                </View>

                {!!currency && !showToast ? (
                  <View style={styles.currencyView}>
                    <Text style={styles.amount}>
                      {currency ? parseFloat(currency.toFixed()).toLocaleString() : '100'}
                    </Text>
                    <Text style={styles.convert}>{currencyTo.currencyName}</Text>
                  </View>
                ) : null}

                <View style={styles.inputView}>
                  <TextInput
                    style={[styles.input, isFocused && styles.inputFocused]}
                    onChangeText={(text) => {
                      changeHandler(text);
                    }}
                    keyboardType="numeric"
                    placeholder="Exchange amount"
                    editable={!showToast}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                      setIsFocused(false);
                    }}
                  />
                  {!!currency && !showToast && (
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

          <View style={styles.transaction}>
            <View style={[styles.rowBetween, styles.transactionHeaderContainer]}>
              <Text style={styles.transactionHeader}> Transaction History</Text>
              <Pressable>
                <Text style={styles.transactionHeaderButton}>View All </Text>
              </Pressable>
            </View>
            <View style={[styles.transactionCard, styles.rowBetween]}>
              <View style={styles.rowBetween}>
                <Image source={Kenya} style={styles.transactionImg} />
                <View style={styles.transactionDetail}>
                  <Text style={styles.transactionName}>John Huq</Text>
                  <Text style={styles.transactionDate}>Jun 10, 12.00pm</Text>
                </View>
              </View>
              <Text style={styles.transactionAmount}>Kes 2,000</Text>
            </View>
            <View style={[styles.transactionCard, styles.rowBetween]}>
              <View style={styles.rowBetween}>
                <Image source={Kenya} style={styles.transactionImg} />
                <View style={styles.transactionDetail}>
                  <Text style={styles.transactionName}>John Huq</Text>
                  <Text style={styles.transactionDate}>Jun 10, 12.00pm</Text>
                </View>
              </View>
              <Text style={styles.transactionAmount}>Kes 2,000</Text>
            </View>
            <View style={[styles.transactionCard, styles.rowBetween]}>
              <View style={styles.rowBetween}>
                <Image source={Kenya} style={styles.transactionImg} />
                <View style={styles.transactionDetail}>
                  <Text style={styles.transactionName}>John Huq</Text>
                  <Text style={styles.transactionDate}>Jun 10, 12.00pm</Text>
                </View>
              </View>
              <Text style={styles.transactionAmount}>Kes 2,000</Text>
            </View>
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

  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
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
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
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
  exchangeModal: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 18,
    // paddingBottom: 20,
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    // alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    flex: 1,
    height: 100,
    margin: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%',
  },
  name: { color: _themeColor.green, fontFamily: 'Karla-Medium', fontSize: 24 },
  rowAround: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' },
  rowBetween: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  rowBewteenWithoutAlign: { flexDirection: 'row', flex: 1, justifyContent: 'space-between' },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
