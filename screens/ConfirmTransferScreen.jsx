// In the React Native app
import { useNavigation } from '@react-navigation/native';
import {
  Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import _themeColor from '../colorScheme.json';

export default function ConfirmTransferScreen() {
  const navigation = useNavigation();
  return (
    <Pressable>
      <View style={{ backgroundColor: _themeColor.white, height: '100%' }}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.welcome}>Deposit account</Text>
            <Text style={styles.label}>
              Make the deposit to any of the following account and the money would be transferred to
              the reciepent
              {' '}
            </Text>
            <View style={{ ...styles.card, marginBottom: 10 }}>
              <Text style={styles.instruction}> 1. Go to M-PESA MENU</Text>
              <Text style={styles.instruction}> 2. Go to Lipa na M-PESA</Text>
              <Text style={styles.instruction}> 3. Go to Buy Goods and Services</Text>
              <Text style={styles.instruction}>
                {' '}
                4. Enter Till number
                {' '}
                <Text style={styles.bolder}>123456</Text>
              </Text>
              <Text style={styles.instruction}> 5. Enter Amount you wish to send</Text>
              <Text style={styles.instruction}> 6. Press the button below to Confirm </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                title="Login"
                onPress={() => {
                  navigation.navigate('Deposit');
                }}
                style={styles.proceed}
                underlayColor={_themeColor.red}
              >
                <Text style={styles.loginText}>Confirm Deposit </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bolder: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: _themeColor.white,
    borderRadius: 25,
    bottom: 0,
    elevation: 12,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 30,
    marginTop: 40,
    paddingHorizontal: 20,
    position: 'relative',
    right: 0,
    shadowColor: _themeColor.gray,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    width: '95%',
  },
  card: {
    backgroundColor: _themeColor.white,
    borderRadius: 25,
    elevation: 15,
    height: 280,
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
    zIndex: 1,
  },
  cardHeader: { fontFamily: 'Karla-Medium', fontSize: 18, paddingVertical: 20 },
  chevron: {},
  container: {
    backgroundColor: _themeColor.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    height: 1000,
    // paddingBottom: 300,
  },
  document: {},
  dropdownButton: {
    alignItems: 'flex-start',
    marginBottom: 20,
    textAlign: 'left',
  },
  dropdownText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
  instruction: {
    color: _themeColor.darkGray,
    fontFamily: 'Karla-Bold',
    fontSize: 17,
    lineHeight: 24,
    marginBottom: 20,
  },
  label: {
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
  loginText: {
    color: _themeColor.white,
    fontFamily: 'Karla-Medium',
    fontSize: 16,
    paddingLeft: 25,
    textAlign: 'center',
  },
  proceed: {
    alignItems: 'center',
    backgroundColor: _themeColor.danger,
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

  row: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
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
    marginTop: 40,
    padding: 10,
  },
});
