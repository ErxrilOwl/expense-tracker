import { View } from "react-native"
import { ExpensesSummary } from "./ExpensesSummary"
import { ExpensesList } from "./ExpensesList"

export const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return (
        <View>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList />
        </View>
    )
}