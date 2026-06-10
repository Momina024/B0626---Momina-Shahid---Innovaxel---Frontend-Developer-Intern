function ExpenseItem({ expense, onDelete, onEdit }) {
  return (
    <div className="bg-white p-4 shadow rounded mb-3">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold">{expense.title}</h2>
          <p className="text-sm text-gray-500">{expense.category}</p>
        </div>

        <p className="text-red-600 font-bold">
          Rs {expense.amount}
        </p>
      </div>

      <p className="text-sm mt-1">{expense.date}</p>

      {expense.notes && (
        <p className="text-gray-600 mt-1">{expense.notes}</p>
      )}

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onEdit(expense)}
          className="bg-yellow-500 px-3 py-1 text-white"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(expense.id)}
          className="bg-red-600 px-3 py-1 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;