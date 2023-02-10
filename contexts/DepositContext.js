import { createContext, useEffect, useState } from 'react';

export const DepositContext = createContext({
  deposit: {},
  saveDeposit: () => {},
});
export default function DepositProvider({ children }) {
  const [deposit, setDeposit] = useState({
    amount: 0,
    currency: 'NGN',
    from: 'KES',
    exchanged: 0,
  });
  useEffect(() => {
    console.log('The updated deposit value: ', deposit);
  }, [deposit]);
  const saveDeposit = (value) => {
    setDeposit(value);
  };

  return (
    <DepositContext.Provider
      value={{
        deposit,
        saveDeposit,
      }}
    >
      {children}
    </DepositContext.Provider>
  );
}
