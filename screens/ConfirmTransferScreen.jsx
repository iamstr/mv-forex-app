// In the React Native app
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import {
  Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Alert from '../assets/icons/Icon feather-alert-circle.svg';
import _themeColor from '../colorScheme.json';
import CustomActivityIndicator from '../components/ActivityIndicator';
import _Config from '../config.json';
import { AuthContext } from '../contexts/AuthContext';
import { DepositContext } from '../contexts/DepositContext';

export default function RecipientScreen() {
  const { deposit, recipient } = useContext(DepositContext);
  const { token } = useContext(AuthContext);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const transferHandler = () => {
    // setIsLoading(true);
    fetch(`${_Config.api}/transaction`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deposit, recipient }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        // setIsLoading(true);
        console.log(data);
      })
      .catch((e) => {
        console.log('the error is', e);
      });
  };
  return (
    <View style={styles.backgroundImage}>
      <ScrollView style={styles.scrollView}>
        <Modal animationType="fade" transparent visible={isLoading}>
          <CustomActivityIndicator isLoading={isLoading} />
        </Modal>
        <Text style={styles.welcome}>Confirm Transfer Details</Text>
        <View style={styles.warn}>
          <Alert style={styles.warnIcon} />
          <Text style={styles.warnText}>
            {' '}
            Confirm if the details you have provided are correct details of the reciepent and that
            you have deposit the money to be transferred to the account you have selected
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.label}>Fullname </Text>
            <Text style={styles.right}>
              {' '}
              {recipient.recipient}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Transfer channel </Text>
            <Text style={styles.right}>
              {' '}
              {`${recipient.channel.charAt(0).toUpperCase() + recipient.channel.slice(1)} transfer`}
            </Text>
          </View>

          {recipient.number && (
            <View style={styles.row}>
              <Text style={styles.label}>Phone number </Text>
              <Text style={styles.right}>
                {' '}
                {recipient.number}
              </Text>
            </View>
          )}
          {recipient.accountName && (
            <View style={styles.row}>
              <Text style={styles.label}>Account name </Text>
              <Text style={styles.right}>
                {' '}
                {recipient.accountName}
              </Text>
            </View>
          )}
          {recipient.account && (
            <View style={styles.row}>
              <Text style={styles.label}>Account number </Text>
              <Text style={styles.right}>
                {' '}
                {recipient.account}
              </Text>
            </View>
          )}

          <View style={styles.row}>
            <Text style={styles.label}>Amount </Text>
            <Text style={styles.right}>
              {' '}
              {deposit.amount.toLocaleString()}
              {' '}
              {deposit.from}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Exchanged Amount</Text>
            <Text style={styles.right}>
              {' '}
              {deposit.exchanged.toLocaleString()}
              {' '}
              {deposit.currency}
            </Text>
          </View>
          <TouchableOpacity
            title="Login"
            onPress={() => {
              transferHandler();
              // navigation.navigate('Final');
            }}
            style={styles.button}
            underlayColor={_themeColor.primary}
          >
            <Text style={styles.loginText}>Confirm Transfer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: _themeColor.white,
    height: '100%',
    position: 'relative',
    width: '100%',
  },
  button: {
    backgroundColor: _themeColor.danger,

    borderRadius: 25,
    elevation: 12,
    height: 50,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 50,
    shadowColor: _themeColor.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    width: '80%',
  },
  container: {
    backgroundColor: _themeColor.white,
    paddingTop: 40,
  },
  forgot: {
    backgroundColor: _themeColor.white,
    fontFamily: 'Karla-Regular',
    margin: 12,
    padding: 10,
  },
  forgotText: {
    color: _themeColor.secondary,

    fontFamily: 'Karla-Regular',
    fontSize: 18,
  },
  input: {
    borderColor: _themeColor.gray,
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: 'Karla-Medium',
    height: 50,
    margin: 12,
    marginBottom: 40,
    padding: 10,
  },
  label: {
    color: _themeColor.darkGray,
    fontFamily: 'Karla-Regular',
    fontSize: 16,
    marginLeft: 12,
    marginRight: 12,
    // paddingLeft: 10,
    paddingRight: 10,
  },
  loginText: {
    color: _themeColor.lightRed,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  right: { textAlign: 'left', width: 130 },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginHorizontal: 12,
  },
  scrollView: {
    backgroundColor: 'transparent',
    height: '100%',
  },
  subHeader: {
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  transparentButton: {
    backgroundColor: _themeColor.white,
    borderColor: _themeColor.primary,
    borderRadius: 25,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    width: '80%',
  },
  warn: {
    alignItems: 'flex-start',
    backgroundColor: _themeColor.lightRed,
    borderRadius: 10,
    color: _themeColor.secondary,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 12,
    padding: 30,
  },
  warnIcon: {
    paddingTop: 20,
  },
  warnText: {
    color: _themeColor.danger,
    fontFamily: 'Karla-Regular',
    lineHeight: 20,
    marginLeft: 15,
    // fontSize: 22,
    // margin: 12,
    // marginTop: 40,
    // padding: 10,
  },
  welcome: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 22,
    margin: 12,
    marginBottom: 15,
    marginTop: 40,
    padding: 10,
  },
});
