import { IBudgetContext } from "../../components/types/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface IBudgetContextProviderProps {
  children: ReactNode;
}

export const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

export const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setNewBudget: (newBudget) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        budget: newBudget,
      }));
    },
    remaining: 0,
    setNewRemaining: () => {
      setBudgetContext((ctx) => ({
        ...ctx,
        remaining: ctx.budget - ctx.spending,
      }));
    },
    spending: 0,
    setNewSpending: (value) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        spending: ctx.spending + value,
      }));
    },
  }));
  return budgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider = ({ children }: IBudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
