import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, onEdit }) {
  if (!expenses.length)
    return <p className="text-center">No expenses found</p>;

  return expenses.map((e) => (
    <ExpenseItem
      key={e.id}
      expense={e}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ));
}

export default ExpenseList;