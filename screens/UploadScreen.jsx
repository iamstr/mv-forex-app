// In the React Native app
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Upload from '../assets/icons/Camera.svg';
import _themeColor from '../colorScheme.json';

export default function LoginScreen() {
  const [jwt, setJWT] = useState(null); // JWT state

  const navigation = useNavigation();
  // ...rest of the import statements remain unchanged

  const [selectedImage, setSelectedImage] = useState(null);
  const route = useRoute();
  const { type } = route.params;

  useEffect(() => {
    console.log(type);
  }, []);

  const pickImageAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={{ backgroundColor: _themeColor.white, height: '100%' }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Let's verify your identity</Text>
        <Text style={styles.label}>
          Upload the front side of your
          {' '}
          {type[0].toUpperCase() + type.slice(1)}
        </Text>
        <View style={styles.document}>
          {selectedImage !== null ? (
            <TouchableOpacity onPress={pickImageAsync}>
              <Image source={{ uri: selectedImage }} style={styles.idImage} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={pickImageAsync} style={styles.uploadImage}>
              <Upload />
              <Text style={styles.uploadText}>Tap here to upload your image</Text>
            </TouchableOpacity>
          )}
          {selectedImage && (
            <TouchableOpacity
              title="Login"
              onPress={() => {
                if (type === 'passport') {
                  navigation.navigate('ConfirmAccount');
                } else {
                  navigation.navigate('IDBack');
                }
              }}
              style={styles.button}
              underlayColor={_themeColor.primary}
            >
              <Text style={styles.loginText}>
                {type === 'passport' ? 'complete signup' : 'Upload backside of ID'}
                {' '}
              </Text>
            </TouchableOpacity>
          )}
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
    marginTop: 50,
    paddingHorizontal: 20,
    shadowColor: _themeColor.gray,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    width: '95%',
  },
  chevron: {},
  container: {
    backgroundColor: _themeColor.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingBottom: 300,
    paddingTop: 50,
  },
  document: {
    alignItems: 'center',
  },

  idImage: {
    borderRadius: 18,
    height: 350,
    // marginTop: 70,
    width: 320,
  },
  label: {
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    marginBottom: 50,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  loginText: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Bold',
    fontSize: 18,
    // marginLeft: 30,
    textAlign: 'center',
  },

  uploadImage: {
    alignItems: 'center',
    borderColor: _themeColor.gray,
    borderRadius: 2,
    borderStyle: 'dashed',
    borderWidth: 2,
    height: 350,
    justifyContent: 'center',
    // marginTop: 70,
    width: 320,
  },

  uploadText: {
    color: _themeColor.green,
    fontFamily: 'Karla-Regular',
    fontSize: 18,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  welcome: {
    color: _themeColor.secondary,
    fontFamily: 'Karla-Medium',
    fontSize: 20,
    margin: 12,
    marginBottom: 15,
    marginTop: 0,
    padding: 10,
  },
});
