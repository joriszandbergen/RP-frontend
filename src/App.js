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
        </Route>
        {/* Catch All */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
