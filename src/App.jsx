
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./signup/signup";
import Signin from "./signin/signin";
import FindPassword from "./find-password/find-password";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/find-password" element={<FindPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

