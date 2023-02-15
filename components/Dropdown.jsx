// In the React Native app
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import {
  Animated, Image, Pressable, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Chevron from '../assets/icons/Path.svg';
import _themeColor from '../colorScheme.json';
import { DepositContext } from '../contexts/DepositContext';

export default function DropDown({
  image, label, dropdown, Zindex,
}) {
  const [initialRotation, setInitialRotation] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(new Animated.Value(0));
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
  const [show, setShow] = useState(false);
  const [rotateAnimationValue, setRotateAnimationValue] = useState(1);
  const navigation = useNavigation();
  const { saveChannel } = useContext(DepositContext);
  const handleAnimation = (animated, value, setValue) => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      animated.setValue(value);
    });
    // Alert.alert(`value is ${value}`);
    setShow(true);
    if (value === 1) {
      setValue(0);
    } else {
      setValue(1);
      setShow(false);
    }
  };

  const rotateData = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <Pressable
      onPress={() => {
        if (rotateAnimationValue === 1) {
          setRotateAnimationValue(0);
        } else {
          setRotateAnimationValue(1);
          setShow(false);
        }
      }}
      style={{ paddingBottom: 5 }}
    >
      <TouchableOpacity
        onPress={async () => {
          handleAnimation(rotateAnimation, rotateAnimationValue, setRotateAnimationValue);
        }}
        style={styles.button}
      >
        <View style={styles.row}>
          <Image width={25} height={50} style={styles.document} source={image} />
          <View style={{ alignItems: 'flex-start' }}>
            <Text style={styles.loginText}>{label}</Text>
          </View>
        </View>
        <Animated.View style={{ transform: [{ rotate: rotateData }] }}>
          <Chevron />
        </Animated.View>
      </TouchableOpacity>
      {show && (
        <View style={{ ...styles.card, zIndex: Zindex }}>
          <Text style={styles.cardHeader}>Choose deposit channel</Text>
          {dropdown.map((item, index) => (
            <Pressable
              onPress={() => {
                navigation.navigate('ConfirmDeposit', { info: item });
                saveChannel(item);
              }}
              style={styles.dropdownButton}
              key={Math.random()}
            >
              <Text style={styles.dropdownText}>
                {item.label}
                {' '}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
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
    // marginBottom: 100,
    marginLeft: 10,
    marginRight: 15,
    paddingHorizontal: 20,
    position: 'relative',
    shadowColor: _themeColor.gray,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    // width: '90%',
  },
  card: {
    backgroundColor: _themeColor.white,
    borderRadius: 25,
    elevation: 12,
    height: 250,
    marginLeft: 10,
    // marginRight: 30,
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
    top: 70,
    width: '95%',
    left: 0,
    right: 0,
    zIndex: 5,
  },
  cardHeader: { fontFamily: 'Karla-Medium', fontSize: 18, paddingVertical: 20 },

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
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 16,
    paddingLeft: 25,
    textAlign: 'center',
  },
  row: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
});
