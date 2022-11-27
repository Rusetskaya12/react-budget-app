import { SubmitHandler, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { Submit } from "../FormSubmit/FormSubmit";
import { Title } from "../Title/Title";
import { StyledForm, StyledInputForm } from "./AppExpensesStyled";

interface IFormData {
  name: string;
  price: number;
}
export const AddExpensess = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();
  const { setNewExpense } = useExpensesContext();
  const { budget, setRemaining, setSpending } = useBudgetContext();
  const onSubmit: SubmitHandler<IFormData> = ({ name, price }) => {
    if (budget > 0) {
      setNewExpense({ name, price, id: v4() });
      setSpending(+price);
      setRemaining();
      reset();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title />

      <StyledInputForm
        type="text"
        placeholder="enter name ..."
        {...register("name", {
          required: "name is required",
          maxLength: { value: 10, message: "Maximum 20 letters" },
        })}
      />
      <span className="form-field__error">{errors.name && errors.name.message}</span>
      <StyledInputForm
        type="text"
        placeholder="enter price ..."
        {...register("price", {
          required: "price is required",
          maxLength: { value: 10, message: "Maximum 10 letters" },
          pattern: { value: /^[ 0-9]+$/, message: "Only numbers please" },
        })}
      />
      <span className="form-field__error">{errors.price && errors.price.message}</span>
      <Submit />
    </StyledForm>
  );
};
