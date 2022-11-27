import { useBudgetContext } from "../../context/BudgetContext/BudgerContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const SpentCard = () => {
	const { currentCurrency } = useCurrencyContext();
	const { spending } = useBudgetContext();
  
	return (
	  <div>
		Spent so far: {currentCurrency.value}
		{spending}
	  </div>
	);
  };
  