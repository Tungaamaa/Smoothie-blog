import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import "./App.css"

import { SignIn } from "./pages/signin/SignIn";
import { SignUp } from "./pages/signup/SignUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/recipes" element={<Products />} />
       
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
