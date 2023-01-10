import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign-in" element={<SignIn />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Forgot-Password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
