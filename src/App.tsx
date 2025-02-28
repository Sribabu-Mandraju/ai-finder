import { Routes, Route } from "react-router-dom";
import "./style.css";

import Home from "./pages/home/Home";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
};

export default App;
