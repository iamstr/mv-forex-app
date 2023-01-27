import * as SecureStore from 'expo-secure-store';
import { useState } from 'react';

export default function useToken() {
  const getToken = async () => {
    const tokenString = await SecureStore.getItemAsync('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = async (userToken) => {
    await SecureStore.setItemAsync('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };
  const deleteToken = async () => {
    await SecureStore.deleteItemAsync('token');
    // await SecureStore.setItemAsync('token', null);
    setToken(null);
  };

  return {
    setToken: saveToken,
    token,
    deleteToken,
  };
}
