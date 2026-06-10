function ExpenseFilter({ filters, setFilters }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 grid md:grid-cols-3 gap-3">
      <select
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
        className="border p-2"
      >
        <option value="All">All</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Utilities</option>
        <option>Shopping</option>
        <option>Health</option>
        <option>Education</option>
        <option>Other</option>
      </select>

      <input
        type="date"
        value={filters.startDate}
        onChange={(e) =>
          setFilters({ ...filters, startDate: e.target.value })
        }
        className="border p-2"
      />

      <input
        type="date"
        value={filters.endDate}
        onChange={(e) =>
          setFilters({ ...filters, endDate: e.target.value })
        }
        className="border p-2"
      />
    </div>
  );
}

export default ExpenseFilter;