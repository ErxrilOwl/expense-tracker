import { FlatList, StyleSheet } from "react-native"
import { ExpenseItem } from "./ExpenseItem"

export const ExpensesList = ({ expenses }) => {
    const renderExpenseItem = itemData => {
        return <ExpenseItem { ...itemData.item }/>
    }

    return (
        <FlatList
          data={expenses}
          renderItem={renderExpenseItem}
          keyExtractor={(item) => item.id } 
        />
    )
}

const styles = StyleSheet.create({
    
})