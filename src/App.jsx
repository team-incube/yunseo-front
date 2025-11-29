import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./signup/signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
