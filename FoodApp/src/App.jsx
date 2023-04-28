import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Cart } from "./Pages/Cart";
import { useContext } from "react";
import { FoodContext } from "./main";

function App() {

  const {cartValue} = useContext(FoodContext);
  return (
    
    <>

      <nav>
        <Link to="/">Home </Link>
        <Link to="/menu">Menu </Link>
        <Link to="/cart">Cart ({cartValue})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/menu" element={<Menu/> }/>
        <Route path="/cart" element={<Cart/> }/>
      </Routes>
    </>
  );
}

export default App;
