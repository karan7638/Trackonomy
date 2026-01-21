import {
    LuUtensils,
    LuTrendingUp,
    LuTrendingDown,
    LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
    title,
    icon,
    date,
    amount,
    type,
    hideDeleteBtn,
    onDelete,
}) => {
    const getAmountStyles = () =>
        type === "income"
            ? "text-emerald-600 bg-emerald-50"
            : "text-rose-600 bg-rose-50";

    return (
        <div className="group relative flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200">
            <div className="w-12 h-12 flex items-center justify-center text-xl text-slate-600 bg-slate-100 rounded-xl transition-all duration-200 group-hover:bg-white group-hover:shadow-sm">
                {icon ? (
                    <img src={icon} alt={title} className="w-6 h-6" />
                ) : (
                    <LuUtensils />
                )}
            </div>
            <div className="flex-1 flex items-center justify-between">
                <div>
                    <p className="text-sm text-slate-900 font-semibold">{title}</p>
                    <p className="text-[12px] text-slate-400 mt-0.5">{date}</p>
                </div>

                <div className="flex items-center gap-3">
                    {!hideDeleteBtn && (
                        <button
                            className="text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer p-1.5 hover:bg-rose-50 rounded-lg"
                            onClick={onDelete}
                        >
                            <LuTrash2 size={18} />
                        </button>
                    )}

                    <div
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-bold ${getAmountStyles()}`}
                    >
                        <h6 className="text-[13px] font-bold tracking-tight">
                            {type === "income" ? "+" : "-"} ₹{amount}
                        </h6>
                        {type === "income" ? (
                            <LuTrendingUp size={16} />
                        ) : (
                            <LuTrendingDown size={16} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionInfoCard;
