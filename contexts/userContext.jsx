import * as SecureStore from 'expo-secure-store';
import { createContext, useEffect, useState } from 'react';
import useCredential from '../hooks/useCredentials';
import useToken from '../hooks/useToken';

const UserContext = createContext({});
function UserContextProvider({ children }) {
  const { token, setToken, deleteToken } = useToken();
  const { credential, setCredential, getCredential } = useCredential();
  const [user, setUser] = useState(token);
  useEffect(() => {
    async function setSecureStorage() {
      const storedUser = await SecureStore.getItemAsync('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setSecureStorage();
  }, []);

  useEffect(() => {
    async function setSecureStorage() {
      if (user) {
        await SecureStore.setItemAsync('user', JSON.stringify(user));
      } else {
        await SecureStore.removeItemAsync('user');
      }
    }
    setSecureStorage();
  }, [user]);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export { UserContext, UserContextProvider };
