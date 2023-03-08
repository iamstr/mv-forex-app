import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import { useContext, useEffect, useState } from 'react';
import {
  Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import BTC from '../assets/other/bitcoin.png';
import Canada from '../assets/other/canada.png';
import Ghana from '../assets/other/ghana.png';
import Kenya from '../assets/other/icons8-kenya-48.png';
import Nigeria from '../assets/other/nigeria.png';
import USDT from '../assets/other/tether.png';
import Uganda from '../assets/other/uganda.png';
import UAE from '../assets/other/united-arab-emirates.png';
import UK from '../assets/other/united-kingdom.png';
import USA from '../assets/other/united-states-of-america.png';
import _themeColor from '../colorScheme.json';
import _Config from '../config.json';
import { AuthContext } from '../contexts/AuthContext';
import { formatDate } from '../utils';

const allCurrency = [
  { currencyName: 'KES', currencyFlag: Kenya, status: 'active' },
  { currencyName: 'NGN', currencyFlag: Nigeria, status: 'active' },
  { currencyName: 'USD', currencyFlag: USA, status: 'active' },
  { currencyName: 'AED', currencyFlag: UAE, status: 'inactive' },
  { currencyName: 'GBP', currencyFlag: UK, status: 'inactive' },
  { currencyName: 'CAR', currencyFlag: Canada, status: 'inactive' },
  { currencyName: 'UGX', currencyFlag: Uganda, status: 'inactive' },
  { currencyName: 'GHC', currencyFlag: Ghana, status: 'inactive' },
  { currencyName: 'BTC', currencyFlag: BTC, status: 'inactive' },
  { currencyName: 'USDT', currencyFlag: USDT, status: 'inactive' },
];
export default function Transaction() {
  const { token } = useContext(AuthContext);
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${_Config.api}/transaction/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTransactions(data);
      })
      .catch(() => {
        Alert.alert(
          'Oops something went wrong',
          'Unknown error occurred',
          [
            {
              text: 'OK',
            },
          ],
          { cancelable: false },
        );
      });

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <View style={styles.document}>
      <ScrollView>
        {!transactions.length && (
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
        )}
        {!!transactions.length && (
          <View style={styles.transaction}>
            <View style={[styles.rowBetween, styles.transactionHeaderContainer]}>
              <Text style={styles.transactionHeader}> Transaction History</Text>
            </View>
            {!!transactions.length
              && transactions.map((transaction, key) => (
                <View style={[styles.transactionCard, styles.rowBetween]} key={key + Math.random()}>
                  <View style={styles.rowBetween}>
                    <Image
                      source={
                        allCurrency.filter((currency) => currency.currencyName === transaction.from)
                          .length > 0
                          ? allCurrency.filter(
                            (currency) => currency.currencyName === transaction.from,
                          )[0].currencyFlag
                          : allCurrency[0].currencyFlag
                      }
                      style={styles.transactionImg}
                    />
                    <View style={styles.transactionDetail}>
                      <Text style={styles.transactionName}>{`${transaction.recipient}`}</Text>
                      <Text style={styles.transactionDate}>
                        {formatDate(transaction.transaction_date)}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.transactionAmount}>
                    {`${transaction.currency} ${transaction.exchanged.toLocaleString()}`}
                  </Text>
                </View>
              ))}
          </View>
        )}
      </ScrollView>
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

  document: { backgroundColor: _themeColor.white, flex: 1 },
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    // marginLeft: 30,
    textAlign: 'center',
  },
  rowBetween: { alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' },
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
