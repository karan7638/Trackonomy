import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-72 h-[calc(100vh-64px)] bg-white p-6 sticky top-[64px] z-20 flex flex-col border-r border-slate-200/60 transition-all duration-300">
      <div className="flex flex-col items-center justify-center gap-4 mb-10 px-2 py-6 rounded-3xl bg-slate-50/50 border border-slate-100">
        {user?.profileImageUrl ? (
          <img
            src={user?.profileImageUrl || ""}
            alt="Profile Image"
            className="w-20 h-20 bg-slate-200 rounded-2xl object-cover shadow-md shadow-slate-200"
          />
        ) : (
          <CharAvatar
            fullName={user?.fullName}
            width="w-20"
            height="h-20"
            style="text-2xl font-bold bg-primary text-white rounded-2xl shadow-lg shadow-primary/20"
          />
        )}

        <div className="text-center">
          <h5 className="text-[16px] text-slate-900 font-bold leading-tight">
            {user?.fullName || "User Name"}
          </h5>
          <p className="text-[12px] text-slate-400 font-medium mt-1">Free Plan</p>
        </div>
      </div>

      <div className="flex-1 space-y-2">
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-4 text-[15px] font-semibold transition-all duration-200 py-3.5 px-6 rounded-2xl ${activeMenu === item.label
                ? "text-white bg-primary shadow-lg shadow-primary/25 translate-x-1"
                : "text-slate-500 hover:text-primary hover:bg-primary-light"
              }`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className={`text-xl ${activeMenu === item.label ? "animate-pulse" : ""}`} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
