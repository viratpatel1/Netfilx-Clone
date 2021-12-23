import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Homes from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
// import Login from "./pages/Login/Login";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/list";
import NewList from "./pages/newList/NewList";
import Login from "../Pages/Login";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Navbar from "../Componends/AdminNav";
// import Navbar from "../Componends/Navbar";




function Apps()
{
  const { user } = useContext(AuthContext);
  return (

    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/admin" element={<Homes />} />
          {/* <Route exact path="/admin/login" element={<Login />} /> */}
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movie" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/lists" element={<ListList />} />
          <Route path="/list/:id" element={<List />} />
          <Route path="/newlists" element={<NewList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Apps;






{/* <Topbar /> */ }
{/* <Navbar /> */ }