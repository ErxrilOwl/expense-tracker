import axios from 'axios';

const BASE_URL =
  'https://react-native-course-c8927-default-rtdb.asia-southeast1.firebasedatabase.app';

export async function storeExpense(expenseData) {
  const response = await axios.post(`${BASE_URL}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(`${BASE_URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const item = response.data[key].expenseData || response.data[key];

    const expenseObj = {
      id: key,
      amount: item.amount,
      date: new Date(item.date),
      description: item.description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(`${BASE_URL}/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(`${BASE_URL}/expenses/${id}.json`);
}