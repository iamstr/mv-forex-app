import React, { useRef } from 'react';
import {
  Animated, Easing, StyleSheet, Text,
} from 'react-native';
import _themeColor from '../colorScheme.json';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: _themeColor.warning,
    left: 0,
    padding: 10,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 999,
  },
  text: {
    color: _themeColor.warningText,
    fontSize: 16,
  },
});

function Toast({ show, message }) {
  const positionValue = useRef(new Animated.Value(-60)).current;

  React.useEffect(() => {
    if (show) {
      Animated.timing(positionValue, {
        toValue: 0,
        duration: 350,
        easing: Easing.easeOutBack,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(positionValue, {
        toValue: -60,
        duration: 350,
        easing: Easing.easeInBack,
        useNativeDriver: false,
      }).start();
    }
  }, [show, positionValue]);

  if (!show) return null;

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: positionValue }] }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

export default Toast;
