import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Global } from "./globalStyles";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "./context/ExpenseListContext/ExpenseListContext";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <CurrencyContextProvider>
        <ExpensesContextProvider>
          <Global />
            <App />
        </ExpensesContextProvider>
    </CurrencyContextProvider>
  </>,
);