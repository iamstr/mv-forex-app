// In the React Native app
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Alert from '../assets/icons/alert-circle.svg';
import _themeColor from '../colorScheme.json';
import { DepositContext } from '../contexts/DepositContext';

export default function RecipientScreen() {
  const { height } = useWindowDimensions();
  const [jwt, setJWT] = useState(null); // JWT state

  const navigation = useNavigation();
  const { saveRecipient } = useContext(DepositContext);

  const [recipient, setRecipient] = useState(false);
  const [account, setAccount] = useState(false);
  const [number, setNumber] = useState(false);
  const [accountName, setAccountName] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('mobile');
  const [items, setItems] = useState([
    { label: 'Mobile Transfer', value: 'mobile' },
    { label: 'Bank Transfer', value: 'bank' },
  ]);
  return (
    <View style={styles.backgroundImage}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.welcome}>Transfer Details</Text>
        <View style={styles.warn}>
          <Alert style={styles.warnIcon} />
          <Text style={styles.warnText}>
            {' '}
            The recipient could be yourself or anybody you choose to send to
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Fullname of recipeint</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            onChangeText={(text) => setRecipient(text)}
          />

          <Text style={styles.label}> Choose Transfer Channel</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={[styles.input, { width: '94%' }]}
            dropDownContainerStyle={{
              borderColor: 'transparent',
              borderWidth: 0,
            }}
            labelStyle={{ color: _themeColor.secondary }}
          />
          <Text style={styles.label}>
            {' '}
            {value === 'mobile' ? 'Mobile number of recipient' : 'Account name'}
          </Text>
          {value === 'bank' ? (
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setNumber(null);
                setAccountName(text);
              }}
              placeholder="your account name satar"
              value={accountName}
            />
          ) : (
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setNumber(text);
                setAccount(null);
                setAccountName(null);
              }}
              placeholder="254712345678"
              value={number}
            />
          )}

          {value !== 'mobile' && (
            <>
              <Text style={styles.label}> Account Number</Text>
              <TextInput
                style={styles.input}
                placeholder="254712345678"
                onChangeText={(text) => {
                  setAccount(text);
                }}
              />
            </>
          )}

          <TouchableOpacity
            title="Login"
            onPress={() => {
              console.log('printing...', {
                recipient,
                number,
                account,
                accountName,
                channel: value,
              });
              saveRecipient({
                recipient,
                number,
                account,
                accountName,
                channel: value,
              });
              navigation.navigate('ConfirmTransfer');
            }}
            style={styles.button}
            underlayColor={_themeColor.primary}
          >
            <Text style={styles.loginText}>Confirm Recipient</Text>
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
    backgroundColor: _themeColor.primary,

    borderRadius: 25,
    elevation: 12,
    height: 50,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
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
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 16,
    marginLeft: 12,
    marginRight: 12,
    // paddingLeft: 10,
    paddingRight: 10,
  },
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    textAlign: 'center',
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
    backgroundColor: _themeColor.light,
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
    color: _themeColor.secondary,
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
