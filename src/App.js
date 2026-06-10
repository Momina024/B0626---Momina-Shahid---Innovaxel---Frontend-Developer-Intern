import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import ExpenseFilter from './components/ExpenseFilter';

function App() {
  // ✅ Lazy initialization – reads localStorage synchronously
  const [expenses, setExpenses] = useState(() => {
    try {
      const stored = localStorage.getItem('expenses');
      if (stored) return JSON.parse(stored);
    } catch (err) {
      console.error('Error reading localStorage', err);
    }
    // Sample data if nothing stored
    return [
      { id: 1, title: 'Groceries', amount: 4500, category: 'Food', date: '2025-06-05', notes: 'Supermarket' },
      { id: 2, title: 'Electricity bill', amount: 2200, category: 'Utilities', date: '2025-06-01', notes: '' },
      { id: 3, title: 'Movie', amount: 1200, category: 'Entertainment', date: '2025-05-28', notes: '' },
    ];
  });

  const [editingExpense, setEditingExpense] = useState(null);
  const [filters, setFilters] = useState({
    category: 'All',
    startDate: '',
    endDate: '',
  });

  // Persist every change to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    } catch (err) {
      console.error('Error saving to localStorage', err);
    }
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([{ ...expense, id: Date.now() }, ...expenses]);
  };

  const updateExpense = (updated) => {
    setExpenses(expenses.map((e) => (e.id === updated.id ? updated : e)));
    setEditingExpense(null);
  };

  const deleteExpense = (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      setExpenses(expenses.filter((e) => e.id !== id));
      if (editingExpense?.id === id) setEditingExpense(null);
    }
  };

  const editExpense = (expense) => {
    setEditingExpense(expense);
  };

  const filteredExpenses = expenses
    .filter((expense) => {
      const matchCategory =
        filters.category === 'All' || expense.category === filters.category;
      const d = new Date(expense.date);
      const matchStart = !filters.startDate || d >= new Date(filters.startDate);
      const matchEnd = !filters.endDate || d <= new Date(filters.endDate);
      return matchCategory && matchStart && matchEnd;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        💰 Personal Expense Tracker
      </h1>

      <ExpenseForm
        addExpense={addExpense}
        updateExpense={updateExpense}
        editingExpense={editingExpense}
        setEditingExpense={setEditingExpense}
      />

      <ExpenseFilter filters={filters} setFilters={setFilters} />

      <Summary expenses={filteredExpenses} />

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onEdit={editExpense}
      />
    </div>
  );
}

export default App;