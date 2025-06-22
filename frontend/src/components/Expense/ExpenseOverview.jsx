import { useEffect } from "react";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareExpenseLineChartData } from "../../utils/helper";
import CustomLineChart from "../Charts/CustomLineChart";

const ExpenseOverview = ({ transactions, onAddExpense }) => {
    const [chartData, setChartData] = useState([]);
    const [he, setHe] = useState(false);

    useEffect(() => {
        const result = prepareExpenseLineChartData(transactions);
        setChartData(result);

        return () => {};
    }, [transactions]);

    const handleOpen = () =>{
        console.log("hiii");
        setHe(true);
        onAddExpense(true);
        
    }
    useEffect(() =>{
        console.log("gghi");
        handleOpen()
    },[he])

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <div className="">
                    <h5 className="text-lg">Expense Overview</h5>
                    <p className="text-xs text-gray-400 mt-0.5">
                        Track your spending trends over time and gain insights
                        into where your money goes.
                    </p>
                </div>

                <button className="add-btn" onClick={handleOpen}>
                    <LuPlus className="text-lg" />
                    Add Expense
                </button>
            </div>

            <div className="mt-10">
                <CustomLineChart data={chartData} />
            </div>
        </div>
    );
};

export default ExpenseOverview;
