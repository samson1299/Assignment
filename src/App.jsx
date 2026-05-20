import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";

import { Home, ChevronLeft, ChevronRight } from "lucide-react";

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = ["/", "/login", "/register", "/account"];

  const currentPage = pages.indexOf(location.pathname) + 1;
  const totalPages = pages.length;

  const handlePrevious = () => {
    if (currentPage > 1) {
      navigate(pages[currentPage - 2]);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      navigate(pages[currentPage]);
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
 <div className="bottom-navigation">

  <button onClick={handleHome} className="home-btn">
    <Home size={22} />
  </button>

  <div className="nav-controls">

    <button
      onClick={handlePrevious}
      disabled={currentPage === 1}
      className="nav-btn"
    >
      <ChevronLeft size={24} />
    </button>

    <span className="page-text">
      {currentPage} of {totalPages}
    </span>

    <button
      onClick={handleNext}
      disabled={currentPage === totalPages}
      className="nav-btn"
    >
      <ChevronRight size={24} />
    </button>

  </div>
</div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>

        <BottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;