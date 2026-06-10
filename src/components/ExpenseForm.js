import { useEffect, useState } from "react";

function ExpenseForm({
  addExpense,
  updateExpense,
  editingExpense,
  setEditingExpense,
}) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: "",
    notes: "",
  });

  useEffect(() => {
    if (editingExpense) setForm(editingExpense);
  }, [editingExpense]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.title || !form.amount || !form.date) return;
    if (form.amount <= 0) return;

    const data = {
      ...form,
      amount: Number(form.amount),
    };

    if (editingExpense) {
      updateExpense(data);
    } else {
      addExpense(data);
    }

    setForm({
      title: "",
      amount: "",
      category: "Food",
      date: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow mb-4">
      <div className="grid md:grid-cols-2 gap-3">

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2"
        />

        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="border p-2"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-2"
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Utilities</option>
          <option>Shopping</option>
          <option>Health</option>
          <option>Education</option>
          <option>Other</option>
        </select>

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2"
        />

        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          className="border p-2 md:col-span-2"
          placeholder="Notes"
        />

      </div>

      <div className="flex gap-3 mt-3">
        <button className="bg-blue-600 text-white px-4 py-2">
          {editingExpense ? "Update" : "Add"}
        </button>

        {editingExpense && (
          <button
            type="button"
            onClick={() => setEditingExpense(null)}
            className="bg-gray-400 px-4 py-2 text-white"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ExpenseForm;