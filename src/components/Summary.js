import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Summary({ expenses }) {
  const total = expenses.reduce((a, b) => a + b.amount, 0);

  const data = Object.values(
    expenses.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || {
        category: e.category,
        amount: 0,
      };
      acc[e.category].amount += e.amount;
      return acc;
    }, {})
  );

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">
        Total: Rs {total}
      </h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Summary;