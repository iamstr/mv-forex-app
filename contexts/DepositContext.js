import { createContext, useEffect, useState } from 'react';

export const DepositContext = createContext({
  deposit: {},
  saveDeposit: () => {},
  channel: {},
  saveChannel: () => {},
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
  useEffect(() => {
    console.log('The updated channel value: ', channel);
  }, [channel]);
  const saveDeposit = (value) => {
    setDeposit(value);
  };
  const saveChannel = (value) => {
    setChannel(value);
  };

  return (
    <DepositContext.Provider
      value={{
        deposit,
        saveDeposit,
        channel,
        saveChannel,
      }}
    >
      {children}
    </DepositContext.Provider>
  );
}
