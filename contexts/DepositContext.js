import { createContext, useEffect, useState } from 'react';

export const DepositContext = createContext({
  deposit: {},
  saveDeposit: () => {},
  channel: {},
  saveChannel: () => {},
  recipient: {},
  saveRecipient: () => {},
});
export default function DepositProvider({ children }) {
  const [deposit, setDeposit] = useState({
    amount: 0,
    currency: 'NGN',
    from: 'KES',
    exchanged: 0,
  });
  const [channel, setChannel] = useState({
    account: 0,
    label: '',
    type: '',
    value: '',
  });
  const [recipient, setRecipient] = useState({
    recipient: 0,
    channel: '',
    number: '',
    account: '',
    accountName: '',
  });
  useEffect(() => {
    console.log('The updated channel value: ', channel);
  }, [channel]);
  const saveDeposit = (value) => {
    setDeposit(value);
  };
  const saveChannel = (value) => {
    setChannel(value);
  };
  const saveRecipient = (value) => {
    setRecipient(value);
  };

  return (
    <DepositContext.Provider
      value={{
        deposit,
        saveDeposit,
        channel,
        saveChannel,
        recipient,
        saveRecipient,
      }}
    >
      {children}
    </DepositContext.Provider>
  );
}
