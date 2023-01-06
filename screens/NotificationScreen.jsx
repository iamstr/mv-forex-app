import { useFonts } from 'expo-font';
import {
  ScrollView, StyleSheet, Text, View,
} from 'react-native';
import Fail from '../assets/icons/Icons-Check-input-fail.svg';
import Success from '../assets/icons/Icons-Check-input-success.svg';
import _themeColor from '../colorScheme.json';

export default function NotificationScreen() {
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('../assets/fonts/Karla/KarlaRegular.ttf'),
    'Karla-Medium': require('../assets/fonts/Karla/KarlaMedium.ttf'),
    'Karla-Bold': require('../assets/fonts/Karla/KarlaBold.ttf'),
  });
  return (
    <View style={styles.document}>
      <ScrollView>
        <Text style={styles.notificationDate}>November 12, Tuesday</Text>

        <View style={styles.card}>
          <View style={[styles.spaceBetween, styles.marginBottom]}>
            <View style={styles.spaceBetween}>
              <Success />
              <Text style={styles.notificationText}>Mr Mo has recieved kes 2,000</Text>
            </View>
            <Text style={styles.notificationHour}>18.00HRS</Text>
          </View>
          <View style={[styles.spaceBetween, styles.marginBottom]}>
            <View style={styles.spaceBetween}>
              <Success />
              <Text style={styles.notificationText}>Mr Mo has recieved kes 2,000</Text>
            </View>
            <Text style={styles.notificationHour}>18.00HRS</Text>
          </View>
        </View>
        <Text style={styles.notificationDate}>November 12, Tuesday</Text>
        <View style={styles.card}>
          <View style={[styles.spaceBetween, styles.marginBottom]}>
            <View style={styles.spaceBetween}>
              <Success />
              <Text style={styles.notificationText}>Mr Mo has recieved kes 2,000</Text>
            </View>
            <Text style={styles.notificationHour}>18.00HRS</Text>
          </View>
          <View style={[styles.spaceBetween, styles.marginBottom]}>
            <View style={styles.spaceBetween}>
              <Success />
              <Text style={styles.notificationText}>Mr Mo has recieved kes 2,000</Text>
            </View>
            <Text style={styles.notificationHour}>18.00HRS</Text>
          </View>
        </View>

        <Text style={styles.notificationDate}>November 12, Tuesday</Text>

        <View style={styles.card}>
          <View style={[styles.spaceBetween, styles.marginBottom]}>
            <View style={styles.spaceBetween}>
              <Fail />
              <Text style={styles.notificationText}>Mr Mo has recieved kes 2,000</Text>
            </View>
            <Text style={styles.notificationHour}>18.00HRS</Text>
          </View>
          <View style={[styles.spaceBetween, styles.marginBottom]}>
            <View style={styles.spaceBetween}>
              <Fail />
              <Text style={styles.notificationText}>Mr Mo has recieved kes 2,000</Text>
            </View>
            <Text style={styles.notificationHour}>18.00HRS</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: _themeColor.lightGreen,
    borderRadius: 15,
    elevation: 15,
    marginBottom: 20,
    paddingHorizontal: 5,
    paddingVertical: 30,
    // shadowColor: '#ccc',
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.39,
    // shadowRadius: 28,
  },
  document: {
    backgroundColor: _themeColor.white,
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  marginBottom: { marginBottom: 20 },
  notificationDate: {
    fontFamily: 'Karla-Regular',
    fontSize: 19,
    marginBottom: 20,
    marginTop: 20,
  },
  notificationHour: {
    color: _themeColor.gray,
    fontFamily: 'Karla-Bold',
  },
  notificationText: {
    fontFamily: 'Karla-Regular',
  },
  row: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  spaceBetween: {
    alignItems: 'center',
    // backgroundColor: _themeColor.green,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 13,
  },
});
