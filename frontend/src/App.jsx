import React, { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";


const Login = lazy(() => import("./pages/Auth/Login"));
const SignUp = lazy(() => import("./pages/Auth/SignUp"));
const Home = lazy(() => import("./pages/Dashboard/Home"));
const Income = lazy(() => import("./pages/Dashboard/Income"));
const Expense = lazy(() => import("./pages/Dashboard/Expense"));

const Loading = () => (
    <div className="flex items-center justify-center h-screen text-gray-500">
        Loading...
    </div>
);

const App = () => {
    return (
        <UserProvider>
            <div>
                <Router>
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/" element={<Root />} />
                            <Route path="/login" exact element={<Login />} />
                            <Route path="/signUp" exact element={<SignUp />} />
                            <Route path="/dashboard" exact element={<Home />} />
                            <Route path="/income" exact element={<Income />} />
                            <Route path="/expense" exact element={<Expense />} />
                        </Routes>
                    </Suspense>
                </Router>
            </div>


            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        fontSize: "13px",
                    },
                }}
            />
        </UserProvider>
    );
};

export default App;

const Root = () => {
    // Check if token exists in localStorage
    const isAuthenticated = !!localStorage.getItem("token");

    // Redirect to dashboard if authenticated, otherwise to login
    return isAuthenticated ? (
        <Navigate to="/dashboard" />
    ) : (
        <Navigate to="/login" />
    );
};
