import { Routes, Route } from "react-router-dom";

// pages
import { Home } from "@pages/Home";
import { Privacy } from "./pages/Privacy";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />

      <Route path="*" element={<h1>404, Page Not Found</h1>} />
    </Routes>
  );
}
