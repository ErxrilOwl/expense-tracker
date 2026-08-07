import { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      await fetchExpenses();
    }
  });

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });

  return  <ExpensesOutput expensesPeriod="Last 7 Days" />
}

export default RecentExpenses;
