import { RemainingCard } from "../RemainingCard/RemainingCard";
import { Title } from "../Title/Title";
import { SpentCard } from "../SpentCard/SpentCard";
import { BudgetSelect } from "../BudgetSelect/BudgetSelect";

export const Budget = () => {
  return (
    <div>
      <BudgetSelect />
      <Title />
      <RemainingCard />
      <SpentCard />
    </div>
  );
};
