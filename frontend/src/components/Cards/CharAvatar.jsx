import React from "react";
import { getInitials } from "../../utils/helper";

const CharAvatar = ({ fullName, width, height, style }) => {
    return (
        <div
            className={`${width || "w-12"} ${height || "h-12"} ${style || "bg-primary-light text-primary font-bold shadow-sm"
                } flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-105`}
        >
            {getInitials(fullName || "")}
        </div>
    );
};

export default CharAvatar;
