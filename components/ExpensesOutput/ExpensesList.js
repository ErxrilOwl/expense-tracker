import { FlatList, StyleSheet } from "react-native"

export const ExpensesList = ({ expenses }) => {
    const renderExpenseItem = itemData => {
        return <Text>{ itemData.item.description }</Text>
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