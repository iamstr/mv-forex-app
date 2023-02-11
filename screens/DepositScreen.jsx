// In the React Native app
import {
  Pressable, ScrollView, StyleSheet, Text, View,
} from 'react-native';
import Bank from '../assets/other/bank_channel.png';
import Phone from '../assets/other/phone_channel.png';
import _themeColor from '../colorScheme.json';
import DropDown from '../components/Dropdown';

export default function DepositScreen() {
  return (
    <Pressable>
      <View style={{ backgroundColor: _themeColor.white, height: '100%' }}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.welcome}>Deposit account</Text>
            <Text style={styles.label}>
              Make the deposit to any of the our accounts and the money would be transferred to the
              reciepent
              {' '}
            </Text>
            <View
              style={{
                paddingTop: 150,
                // paddingHorizontal: 20,
                position: 'relative',
              }}
            >
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  paddingBottom: 20,
                  paddingTop: 20,
                  zIndex: 2,
                  left: 0,
                  right: 0,
                }}
              >
                <DropDown
                  image={Phone}
                  label="Mobile money transfer"
                  dropdown={[
                    {
                      label: 'MV Forex 1',
                      value: '0794281600',
                      type: 'mobile',
                      account: '',
                    },
                    {
                      label: 'MV Forex 2',
                      value: '0799834111',
                      type: 'mobile',
                      account: '',
                    },
                    {
                      label: 'Lipa na mpesa',
                      value: 890911,
                      type: 'lipa na mpesa',
                      account: '',
                    },
                  ]}
                  Zindex={3}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: -100,
                  zIndex: 1,
                  left: 0,
                  right: 0,
                }}
              >
                <DropDown
                  image={Bank}
                  label="Bank Transfer"
                  dropdown={[
                    {
                      label: 'GT Bank account 1',
                      value: '0262238013',
                      type: 'bank',
                      account: 'Mark Steve traveling',
                    },
                    {
                      label: 'GT Bank account 2',
                      value: '0005030973',
                      type: 'bank',
                      account: 'AMBALIYU JELILI OPEYEMI',
                    },
                  ]}
                  Zindex={2}
                />
              </View>
            </View>
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
    bottom: 0,
    elevation: 12,
    flexDirection: 'row',
    height: 90,
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
    bottom: 0,
    elevation: 15,
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
    alignItems: 'center',
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
