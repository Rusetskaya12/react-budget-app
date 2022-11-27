export interface IBudgetContext {
  budget: number;
  remaining: number;
  spending: number;
  setNewRemaining: () => void;
  setNewSpending: (value: number) => void;
  setNewBudget: (newBudget: number) => void;
}
