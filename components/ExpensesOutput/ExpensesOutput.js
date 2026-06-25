import { StyleSheet, View } from "react-native"
import { ExpensesSummary } from "./ExpensesSummary"
import { ExpensesList } from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2025-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2026-06-24')
    },
    {
        id: 'e3',
        description: 'A pair of socks',
        amount: 10.25,
        date: new Date('2026-06-19')
    },
    {
        id: 'e4',
        description: 'Banana',
        amount: 5.99,
        date: new Date('2026-06-15')
    },
    {
        id: 'e5',
        description: 'Book',
        amount: 20.59,
        date: new Date('2026-06-10')
    }
]

export const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})