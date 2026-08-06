import axios from 'axios';

const BASE_URL = 'https://react-native-course-c8927-default-rtdb.asia-southeast1.firebasedatabase.app';

export function storeExpense(expenseData) {
    axios.post(`${BASE_URL}/expenses.json`, {
        expenseData
    })
}