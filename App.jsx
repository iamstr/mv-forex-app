import { StyleSheet } from 'react-native';
import AuthProvider from './contexts/AuthContext';
import DepositProvider from './contexts/DepositContext';
// import LoginScreen from "./screens/LoginScreen"
import { UserContextProvider } from './contexts/userContext';
import Main from './Main';

export default function App() {
  return (
    <AuthProvider>
      <UserContextProvider>
        <DepositProvider>
          <Main />
        </DepositProvider>
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
