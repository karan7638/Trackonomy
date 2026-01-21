import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
    return (
        <div className="flex h-screen overflow-hidden bg-white">
            <div className="w-full lg:w-[60vw] p-8 md:p-16 flex flex-col overflow-y-auto">
                <div className="mb-12">
                    <img src="/Trackonomy logo.png" alt="Trackonomy Logo" className="h-10 w-auto" />
                </div>
                <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
                    {children}
                </div>
            </div>

            <div className="hidden lg:flex w-[40vw] bg-[#f5f3ff] relative items-center justify-center p-12 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-[-10%] right-[-10%] w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>

                <div className="relative z-10 w-full max-w-lg">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                            Track your wealth like <br /> <span className="text-primary italic">never before</span>
                        </h2>
                        <p className="text-slate-500 font-medium">
                            Join thousands of users who manage their finances <br /> effortlessly with Trackonomy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mb-12">
                        <StatsInfoCard
                            icon={<LuTrendingUpDown />}
                            label="Portfolio Growth"
                            value="430,250"
                            color="bg-primary"
                        />
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-fuchsia-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src={CARD_2}
                            alt="Dashboard Preview"
                            className="relative w-full rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatsInfoCard = ({ icon, label, value, color }) => {
    return (
        <div className="card flex gap-5 !p-4 !rounded-2xl shadow-xl shadow-primary/5 border-white bg-white/80 backdrop-blur-sm">
            <div
                className={`w-12 h-12 flex items-center justify-center text-[22px] text-white ${color} rounded-xl shadow-lg shadow-primary/20 animate-bounce-subtle`}
            >
                {icon}
            </div>
            <div>
                <h6 className="text-[12px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">{label}</h6>
                <span className="text-xl text-slate-900 font-bold tracking-tight">₹{value}</span>
            </div>
        </div>
    );
};

export default AuthLayout;
