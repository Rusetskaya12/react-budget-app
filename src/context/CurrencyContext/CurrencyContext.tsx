import { createContext, useContext, useState } from "react";
import { Currency } from "../../components/config/currency";


export interface ICurrencyContectProviderProps {
}

export interface ICurrencyContext {
  currentCurrency: ICurrencyOption;
  setCurrency: (currency: ICurrencyOption) => void;
  currencies: ICurrencyOption[];
}

export type ICurrencyOption = {
  label: keyof typeof Currency;
  value: Currency;
};


const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
    currentCurrency: { value: Currency.USD, label: "USD" },
    currencies: [
      { value: Currency.USD, label: "USD" },
      { value: Currency.EUR, label: "EUR" },
      { value: Currency.GBR, label: "GBR" },
      { value: Currency.BYN, label: "BYN" },
    ],
    setCurrency: (currentCurrency: ICurrencyOption) => {
      setCurrencyContext((ctx: any) => ({
        ...ctx,
        currentCurrency,
      }));
    },
  }));
  return currencyContext;
};

export const useCurrencyContext = () => useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvider = ({ children }: ICurrencyContectProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
