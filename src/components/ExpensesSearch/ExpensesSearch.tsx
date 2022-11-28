import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";

export const ExpensesSearch = () => {
  // eslint-disable-next-line no-empty-pattern
  const {} = useExpensesContext();
  return <ExpensesSearch type="search" placeholder="search ..." />;
};
