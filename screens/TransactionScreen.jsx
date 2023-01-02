import { Video } from 'expo-av';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Kenya from '../assets/other/icons8-kenya-48.png';
import _themeColor from '../colorScheme.json';

export default function Transaction() {
  return (
    <View style={styles.document}>
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
  rowBetween: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
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
