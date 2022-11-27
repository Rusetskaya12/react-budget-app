import { useState } from "react";
import { useInput } from "../hooks/useInput";
import { StyledTitle } from "../Title/TytleStyles";
import { StyledBudgetCard } from "./budgetStyled";

export const BurgetCard = () => {
  const inputValue = useInput();
  const { budget, setNewBudget } = useBurgetContext();
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  }; 
  
  const handleSave = () => {
    setIsEditMode(false);
    setNewBudget(+inputValue.value);
  };
  return (
    <StyledBudgetCard>
      {isEditMode ? (
        <>
          <input type="text" {...inputValue} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <StyledTitle>Budget:{budget}</StyledTitle>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </StyledBudgetCard>
  );
};

function useBurgetContext(): { budget: any; setNewBudget: any } {
  throw new Error("Function not implemented.");
}
