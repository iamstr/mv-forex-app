import * as SecureStore from 'expo-secure-store';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  saveToken: (token) => { },
  deleteToken: () => { },
  getToken: () => { },
  saveSignup: (info) => { },
  signup: {},
  signedInUser: {},
  saveSignedInUser: (info) => { },
});
export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signup, setSignup] = useState({
    fullname: '',
    email: '',
    mobile: '',
    password: '',
    terms: '',
    document: { type: '', back: '', front: '' },
  });
  const [signedInUser, setSignedInUser] = useState({
    fullname: '',
    email: '',
    mobile: '',
    password: '',
    terms: '',
    type: '',
    back: '',
    front: '',
  });

  useEffect(() => {
    const getToken = async () => {
      const tokenString = await SecureStore.getItemAsync('secureTokenString');
      if (tokenString) {
        const { secureTokenString } = JSON.parse(tokenString);
        setToken(secureTokenString);
        setIsLoggedIn(true);
      }
    };
    getToken();
  }, []);

  const saveToken = async (tokenName) => {
    await SecureStore.setItemAsync('token', JSON.stringify({ tokenName }));
    setToken(tokenName);
    setIsLoggedIn(true);
  };
  const saveSignup = async (info) => {
    setSignup(info);
  };
  const saveSignedInUser = async (info) => {
    setSignedInUser(info);
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
        saveSignup,
        signup,
        saveSignedInUser,
        signedInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
