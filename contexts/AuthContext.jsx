import * as SecureStore from 'expo-secure-store';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  saveToken: () => {},
  deleteToken: () => {},
  getToken: () => {},
});
export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      const tokenString = await SecureStore.getItemAsync('token');
      if (tokenString) {
        const { token } = JSON.parse(tokenString);
        setToken(token);
        setIsLoggedIn(true);
      }
    };
    getToken();
  }, []);

  const saveToken = async (token) => {
    await SecureStore.setItemAsync('token', JSON.stringify({ token }));
    setToken(token);
    setIsLoggedIn(true);
    console.log('value of isloggedIn', isLoggedIn);
  };

  const deleteToken = async () => {
    await SecureStore.deleteItemAsync('token');
    setToken(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        saveToken,
        deleteToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
