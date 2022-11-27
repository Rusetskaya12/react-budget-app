
export const ExpensesList = () => {
  const { expenses } = useExpensesContext();

  return (
    <div>
      <ul>
        {expenses.map(({ title, cost, id }) => {
          return (
            <li key={id}>
              {title} = {cost}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function useExpensesContext(): { expenses: any; searchValue: any } {
  throw new Error("Function not implemented.");
}
