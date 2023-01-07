import { useFonts } from 'expo-font';
import { useState } from 'react';
import {
  Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View,
} from 'react-native';
import Toast from 'react-native-root-toast';
import Pen from '../assets/icons/Icon feather-edit-3.svg';
import _themeColor from '../colorScheme.json';

const items = [
  { id: 1, label: 'Email', value: 'Joe@gmail.com' },
  { id: 2, label: 'Phone', value: '0708 693536' },
  { id: 3, label: 'Password', value: '*************' },
];
export default function ProfileScreen() {
  const [show, setShow] = useState([false, false, false]);
  const [toast, setToast] = useState(false);
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('../assets/fonts/Karla/KarlaRegular.ttf'),
    'Karla-Medium': require('../assets/fonts/Karla/KarlaMedium.ttf'),
    'Karla-Bold': require('../assets/fonts/Karla/KarlaBold.ttf'),
  });
  // useEffect(() => {
  //   setTimeout(() => setToast(false), 2000); // show toast after 2s
  // }, [toast]);

  const _showInput = (state) => {};
  return (
    <View style={styles.document}>
      <ScrollView>
        <View style={styles.card}>
          {items.map((item) => (
            <View
              key={item.id}
              style={[
                styles.spaceBetween,
                styles.marginBottom,
                item.id === 3 ? null : styles.borderBottom,
              ]}
            >
              <Text style={styles.notificationHour}>{item.label}</Text>
              {!show[item.id] ? (
                <View style={styles.row}>
                  <Text style={styles.notificationText}>{item.value}</Text>

                  <Pressable
                    onPress={() => {
                      const showTemp = [...show];
                      showTemp[item.id] = true;
                      setShow([...showTemp]);
                      setToast(false);
                    }}
                  >
                    <Pen style={styles.pen} height={16} />
                  </Pressable>
                </View>
              ) : (
                <TextInput
                  style={styles.input}
                  placeholder="*********"
                  onBlur={() => {
                    Alert.alert('Save changes', `You have changed your ${item.label}`, [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'OK',
                        onPress: () => {
                          const showTemp = [...show];
                          showTemp[item.id] = false;
                          setShow([...showTemp]);
                          setToast(true);
                          setTimeout(() => setToast(false), 2000);
                        },
                      },
                    ]);
                  }}
                />
              )}
            </View>
          ))}

          <Toast
            visible={toast}
            position={Toast.positions.BOTTOM}
            shadow={false}
            animation
            duration={Toast.durations.LONG}
          >
            SuccessFully updated
          </Toast>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomColor: _themeColor.lightGray,
    borderBottomWidth: 0.5,
  },
  card: {
    backgroundColor: _themeColor.white,
    borderRadius: 15,
    elevation: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingTop: 40,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 28,
  },
  document: {
    backgroundColor: _themeColor.white,
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  input: {
    borderColor: _themeColor.gray,
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: 'Karla-Medium',
    height: 50,
    padding: 10,
    width: 220,
    // flex: 1,
  },
  marginBottom: { marginBottom: 25, paddingBottom: 30 },
  notificationDate: {
    fontFamily: 'Karla-Regular',
    fontSize: 19,
    marginBottom: 20,
    marginTop: 20,
  },
  notificationHour: {
    color: _themeColor.darkGray,
    fontFamily: 'Karla-Bold',
    fontSize: 16,
    paddingLeft: 10,
  },
  notificationText: {
    // backgroundColor: _themeColor.green,
    color: _themeColor.secondary,
    fontFamily: 'Karla-Regular',
    fontSize: 16,
    paddingRight: 20,
    textAlign: 'left',
    width: 150,
  },
  pen: {
    height: 20,
    paddingRight: 30,
    width: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // paddingBottom: 10,
  },
  spaceBetween: {
    alignItems: 'center',
    // backgroundColor: _themeColor.green,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 13,
  },
});
