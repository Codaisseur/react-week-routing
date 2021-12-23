import "./App.css";
import { Routes, Route } from "react-router-dom";
import DiscoverPage from "./Pages/DiscoverPage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Hello React Router</h1>
      <Routes>
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
