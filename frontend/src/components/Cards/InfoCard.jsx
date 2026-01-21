
const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="card flex gap-6">
      <div
        className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-2xl shadow-lg shadow-gray-200`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-[13px] text-slate-400 font-medium mb-1 uppercase tracking-wider">
          {label}
        </h6>
        <span className="text-2xl text-slate-900 font-semibold tracking-tight">
          ₹{value}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
