interface IProps {
  title: string;
  cost: number;
  id: string;
}

export const ExpensesListItem = ({ title, cost, id }: IProps) => {
  const { currentCurrency } = useBudgetContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(id);
  };
  return (
    <li>
      <p>{title}</p>
      <span>
        {currentCurrency.value}
        {cost}
      </span>
      <button onClick={handleDelete} />
    </li>
  );
};

function useExpensesContext(): { deleteExpense: any } {
  throw new Error("Function not implemented.");
}

function useBudgetContext(): { currentCurrency: any } {
  throw new Error("Function not implemented.");
}
