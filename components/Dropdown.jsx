// In the React Native app
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Alert,
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Chevron from '../assets/icons/Path.svg';
import _themeColor from '../colorScheme.json';

/**
 * @param array dropdown
 ** {label,value}
 * @returns
 */

export default function DropDown({ image, label, dropdown }) {
  const [initialRotation, setInitialRotation] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(new Animated.Value(0));

  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
  const [show, setShow] = useState(false);
  const [rotateAnimationValue, setRotateAnimationValue] = useState(1);
  const navigation = useNavigation();

  const handleAnimation = (animated, value, setValue) => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      animated.setValue(value);
    });
    Alert.alert(`value is ${value}`);
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
    >
      <TouchableOpacity
        title="Login"
        onPress={async () => handleAnimation(rotateAnimation, rotateAnimationValue, setRotateAnimationValue)}
        style={styles.button}
        underlayColor={_themeColor.primary}
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
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Choose deposit channel</Text>
          {dropdown.map((item) => (
            <Pressable onPress={() => Alert.alert(item.label)} style={styles.dropdownButton}>
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
