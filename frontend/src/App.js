import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import "./App.css";
import { useUserContext } from "./context/UserContext";
import { SignIn } from "./pages/signin/SignIn";
import { SignUp } from "./pages/signup/SignUp";
import { Product } from "./pages/product/Product";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { currentUser, userContextLoading } = useUserContext();

  if (userContextLoading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-up"
          element={!currentUser ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/sign-in"
          element={!currentUser ? <SignIn /> : <Navigate to="/" />}
        />
        <Route
          path="/recipes"
          element={currentUser ? <Products /> : <Navigate to="/sign-in" />}/>
          <Route
          path="/recipes/:id"
          element={currentUser ? <Product /> : <Navigate to="/sign-in" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
