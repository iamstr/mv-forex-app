import {
  ActivityIndicator, StyleSheet, Text, View,
} from 'react-native';
import _themeColor from '../colorScheme.json';

function CustomActivityIndicator({ isLoading }) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <ActivityIndicator size={60} color={_themeColor.secondary} />
        <Text style={styles.modalText}>Logging in...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  modal: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 14,
    justifyContent: 'center',
    padding: 40,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,

    shadowRadius: 9.11,
  },
  modalText: {
    color: _themeColor.secondary,
    fontSize: 18,
    marginTop: 20,
  },
});

export default CustomActivityIndicator;
