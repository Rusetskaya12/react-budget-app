import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { remaining } = useBudgetContext();

  return (
    <RemainingCard>
      Remaining {currentCurrency.value}:{remaining}{" "}
    </RemainingCard>
  );
};
