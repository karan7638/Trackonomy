import { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../../components/Charts/CustomBarChart";

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const result = prepareExpenseBarChartData(data);
      setChartData(result);
    }
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 30 Days Expenses</h5>
      </div>

      {chartData.length > 0 ? (
        <CustomBarChart data={chartData} />
      ) : (
        <p className="text-sm text-gray-500 text-center mt-6">
          No expenses recorded in the last 30 days.
        </p>
      )}
    </div>
  );
};

export default Last30DaysExpenses;
