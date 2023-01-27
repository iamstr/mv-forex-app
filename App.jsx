import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AuthProvider, { AuthContext } from './contexts/AuthContext';
// import LoginScreen from "./screens/LoginScreen"
import { UserContext, UserContextProvider } from './contexts/userContext';
import Main from './Main';

export default function App() {
  // const user = useContext(UserContextProvider);
  const { isLoggedIn } = useContext(AuthContext);

  const user = useContext(UserContext);
  useEffect(() => {
    console.log(`token has update:${user.username}`);
  }, [isLoggedIn]);
  return (
    <AuthProvider>
      <UserContextProvider>
        <Main />
      </UserContextProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
