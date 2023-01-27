import * as SecureStore from 'expo-secure-store';
import { useState } from 'react';

export default function useCredential() {
  const getCredential = async () => {
    const CredentialString = await SecureStore.getItemAsync('credential');
    const userCredential = JSON.parse(CredentialString);
    return userCredential;
  };

  const [credential, setCredential] = useState(getCredential());

  const saveCredential = async (userCredential) => {
    await SecureStore.setItemAsync('Credential', JSON.stringify(userCredential));
    setCredential(userCredential);
  };

  return {
    setCredential: saveCredential,
    credential,
    getCredential,
  };
}
