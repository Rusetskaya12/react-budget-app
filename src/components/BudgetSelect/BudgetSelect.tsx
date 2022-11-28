import { SingleValue } from "react-select";
import Select from "react-select/dist/declarations/src/Select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const CurrensySelect = () => {
  const { setNewCurrency, currencies, currentCurrency } = useCurrencyContext();
  const handleSelect = (option: SingleValue<typeof currentCurrency>) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
		  options={currencies}
		  value={currentCurrency}
		  onChange={handleSelect}
		  isSearchable={false} inputValue={""} onInputChange={function (_newValue: string): void {
			  throw new Error("Function not implemented.");
		  } } onMenuOpen={function (): void {
			  throw new Error("Function not implemented.");
		  } } onMenuClose={function (): void {
			  throw new Error("Function not implemented.");
		  } }    />
  );
};
