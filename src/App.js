import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login"
import Home from "./pages/Home";

function App() {
  return (
    <section className="font-chirp">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
