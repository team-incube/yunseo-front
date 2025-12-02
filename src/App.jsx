// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./signup/signup";
import CleaningArea from "./cleaningArea/cleaningArea";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cleaningarea" element={<CleaningArea />} />
      </Routes>
    </BrowserRouter>
  );
}
