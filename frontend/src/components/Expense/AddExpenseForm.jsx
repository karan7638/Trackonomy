import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";
import { useState } from "react";

const AddExpenseForm = ({ onAddExpense }) => {
    const [expense, setExpense] = useState({
        category: "",
        amount: "",
        date: "",
        icon: "",
    });

    const handleChange = (key, value) => {
        setExpense((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        const { category, amount, date } = expense;

        // Basic validation
        if (!category?.trim() || !amount || !date) {
            alert("Please fill all required fields.");
            return;
        }

        onAddExpense(expense);
        setExpense({ category: "", amount: "", date: "", icon: "" }); // Reset form
    };

    return (
        <div>
            <EmojiPickerPopup
                icon={expense.icon}
                onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
            />

            <Input
                value={expense.category}
                onChange={({ target }) => handleChange("category", target.value)}
                label="Category"
                placeholder="Rent, Groceries, etc"
                type="text"
            />
            <Input
                value={expense.amount}
                onChange={({ target }) => handleChange("amount", target.value)}
                label="Amount"
                placeholder="Enter amount"
                type="number"
            />

            <Input
                value={expense.date}
                onChange={({ target }) => handleChange("date", target.value)}
                label="Date"
                type="date"
            />

            <div className="flex justify-end mt-6">
                <button
                    type="button"
                    className="add-btn add-btn-fill"
                    onClick={handleSubmit}
                >
                    Add Expense
                </button>
            </div>
        </div>
    );
};

export default AddExpenseForm;
