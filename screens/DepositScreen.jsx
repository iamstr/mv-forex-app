// In the React Native app
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import {
  Pressable, ScrollView, StyleSheet, Text, View,
} from 'react-native';
import Bank from '../assets/other/bank_channel.png';
import Phone from '../assets/other/phone_channel.png';
import _themeColor from '../colorScheme.json';
import DropDown from '../components/Dropdown';

const _webChatHandlerAsync = async () => {
  const result = await WebBrowser.openBrowserAsync(
    'https://tawk.to/chat/5ca0b80d6bba4605280089c0/default',
  );
};
const _linkOpener = (link) => {
  Linking.openURL(link);
};
export default function DepositScreen() {
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
            <DropDown
              image={Phone}
              label="Mobile money transfer"
              dropdown={[
                { label: 'Send Money', value: 708693536 },
                { label: 'Lipa na mpesa', value: 890911 },
              ]}
            />
            <DropDown
              image={Bank}
              label="Bank Transfer"
              dropdown={[
                { label: 'FCB', value: 708693536 },
                { label: 'Gulf Bank', value: 890911 },
              ]}
            />
          </ScrollView>
        </View>
      </View>
    </Pressable>
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
    marginTop: 40,
    paddingHorizontal: 20,
    position: 'relative',
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
    bottom: 0,
    elevation: 12,
    height: 250,
    marginLeft: 10,
    marginRight: 30,
    marginTop: 40,
    paddingHorizontal: 20,
    position: 'absolute',
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
    height: '100%',
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
  label: {
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 50,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 16,
    paddingLeft: 25,
    textAlign: 'center',
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
    marginTop: 60,
    padding: 10,
  },
});
