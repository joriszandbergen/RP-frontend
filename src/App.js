import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Overview from "./components/Overview";
import Missing from "./components/Missing";
import About from "./components/About";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import { Routes, Route } from "react-router-dom";
import BatteryPage from "./components/battery/BatteryPage";
import SavingsPage from "./components/savings/SavingsPage";
import SchedulePage from "./components/schedule/SchedulePage";
import CarbonPage from "./components/carbon/CarbonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="overview" element={<Overview />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="about" element={<About />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="battery" element={<BatteryPage />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="savings" element={<SavingsPage />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="schedule" element={<SchedulePage />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="carbon" element={<CarbonPage />} />
          </Route>
        </Route>
        {/* Catch All */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
