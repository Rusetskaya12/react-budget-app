import { ExpensesList } from "../ExpensesList/ExpensesList"
import { ExpensesSearch } from "../ExpensesSearch/ExpensesSearch";
import { Title } from "../Title/Title"

export const Expenses = () => {
	return (
		<div>
<Title  />
<ExpensesSearch />
<ExpensesList />
		</div>
	);
};