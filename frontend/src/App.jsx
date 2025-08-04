import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import FundRaiserForm from "./pages/FundRaiserForm";
import { useUser } from "@clerk/clerk-react";

const App = () => {
  const { user } = useUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={user ? <Home /> : <Login />} />
        <Route
          path="/be-Intern"
          element={user ? <FundRaiserForm /> : <Login />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
