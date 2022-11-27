
export const Submit = () => {
  const { setNewExpense } = useExpensesListContext();

  const handleSubmit = () => setNewExpense({ id: "123dd", title: "auto", cost: 30 });

  return <button onClick={handleSubmit}>Done</button>;
};
function useExpensesListContext(): { setNewExpense: any; } {
	throw new Error("Function not implemented.");
}

