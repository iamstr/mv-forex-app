import { useRef, useState } from 'react';
import {
  Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View,
} from 'react-native';

function OTP({ buttonShow, buttonToggle, buttonHide }) {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const [hasFocus, setHasFocus] = useState([true, ...Array(5).fill(false, 0)]);
  const textFieldRefs = useRef([]).current;
  const checkValueEmpty = (arr) => {
    const allValuesNonEmpty = arr.every((item) => item.length > 0);
    return allValuesNonEmpty;
  };
  const handleChange = (index, value) => {
    // if (!checkValueEmpty(code)) {
    //   buttonHide();
    // } else {
    //   buttonShow();
    // }
    const newCode = [...code];

    newCode[index] = value;

    setCode(newCode);
    // console.log(code);
    if (value.length >= 1) {
      if (textFieldRefs[index + 1]) {
        textFieldRefs[index + 1].focus();
      } else if (index === 5) {
        textFieldRefs[textFieldRefs.length - 1].blur();
        // buttonShow();
      }
    }
  };

  const handlePaste = (index, value) => {};
  const focusHandler = (index, value) => {
    const newCode = [...code];

    setCode(newCode);
    const hasFocusArray = hasFocus.map((element, i) => {
      if (index === i) return true;
      return false;
    });
    setHasFocus(hasFocusArray);
    if (!checkValueEmpty(code)) {
      buttonHide();
    } else {
      buttonShow();
    }
  };
  const blurHandler = (index, value) => {
    if (!checkValueEmpty(code)) {
      buttonHide();
    } else {
      buttonShow();
      // textFieldRefs[index + 1].blur();
      Keyboard.dismiss();
    }
  };
  return (
    <View style={styles.container}>
      {code.map((value, index) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} key={index}>
          <TextInput
            key={index}
            style={[styles.input, hasFocus[index] && styles.inputFocused]}
            onFocus={() => focusHandler(index, value)}
            onBlur={() => blurHandler(index, value)}
            value={value}
            onChangeText={(text) => handleChange(index, text)}
            onPaste={(event) => handlePaste(index, event)}
            keyboardType="number-pad"
            ref={(ref) => {
              textFieldRefs[index] = ref;
            }}
            maxLength={1}
          />
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 16,
    height: 50,
    marginHorizontal: 6,
    padding: 8,
    textAlign: 'center',
    width: 48,
  },
  inputFocused: {
    borderColor: 'green',
  },
});

export default OTP;
