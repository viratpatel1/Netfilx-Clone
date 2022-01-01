import './App.scss';
import Home from './Componends/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Watch from './Pages/Watch';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Apps from './Admin/Apps';
import { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import Homes from './Admin/pages/home/Home';
import UserList from './Admin/pages/userList/UserList';
import User from './Admin/pages/user/User';
import NewUser from './Admin/pages/newUser/NewUser';
import ProductList from './Admin/pages/productList/ProductList';
import Product from './Admin/pages/product/Product';
import NewProduct from './Admin/pages/newProduct/NewProduct';
import ListList from './Admin/pages/listList/ListList';
import List from './Admin/pages/list/list';
import NewList from './Admin/pages/newList/NewList';
// import Navbar from './Componends/AdminNav';
import Sidebar from './Admin/components/sidebar/Sidebar';
import Navbarr from './Componends/AdminNav';

function App()
{
  // const history = useNavigate();

  // useEffect(() =>
  // {
  //   if (user !== null || undefined || "")
  //   {
  //     history("/");
  //     return user
  //   } else
  //   {
  //     history("/login");
  //   }
  // }, [user])

  const { user } = useContext(AuthContext);

  // console.log("data ", user);

  return (
    <div className="App">

      {(user?.isAdmin === true) ? (
        <Router>
          <Navbarr />
          <div className="container">
            <Sidebar />
            <Routes>
              {/* <Route exact path="/" element={<Homes />} /> */}
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
      ) : null}

      <Router>
        <Routes>
          <Route path="/" element={user ? <>{(user.isAdmin === false) ? <Home /> : <Homes />}</> : <Navigate replace to="/login" />} />
          {/* <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} /> */}
          <Route path="/register" element={!user ? <Register /> : <Navigate replace to="/" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate replace to="/" />} />
          <Route path="/movies" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
      </Router>

      {(user?.isAdmin === false) ? (
        <>
          <Router>
            <Routes>
              {/* <Route exact path="/" element={<Home />} /> */}
              {/* <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} /> */}
              {/* <Route path="/register" element={!user ? <Register /> : <Navigate replace to="/" />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate replace to="/" />} /> */}
              <Route path="/movies" element={<Home type="movies" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
            </Routes>
          </Router>
        </>
      ) : (null)}

    </div>
  );
}

export default App;





{/* <Route path="/" element={(user?.isAdmin === true) ? <Navigate replace to="/admin" /> : <Navigate replace to="/login" />} /> */ }



{/* {(user.isAdmin === false) && (
  <>
    <Route path="/movies" element={<Home type="movies" />} />
    <Route path="/series" element={<Home type="series" />} />
    <Route path="/watch" element={<Watch />} />
  </>
)}

{(user.isAdmin === true) && (
  <Apps />
)} */}
{/* <Apps /> */ }


{/* <Router>
        <Routes>
          {user ? (
            <>
              <Route path="/movies" element={<Home type="movies" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          ) : (
            <>
              <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate replace to="/" />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate replace to="/" />} />
            </>
          )}
        </Routes>
      </Router> */}