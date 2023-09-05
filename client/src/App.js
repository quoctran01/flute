import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/Home/HomePage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AdminPage from "./Pages/Admin/AdminPage"
import Users from "./Pages/Users"
import Products from "./Pages/Products"
import Caterories from "./Pages/Caterories"
import "bootstrap/dist/js/bootstrap.js";
import Introduction from "./Pages/Introduction/Introduction";
import Cart from "./Pages/Cart/Cart";
import DetailProduct from "./Pages/DetailProduct/DetailProduct";
import Order from "./Pages/Order/Order";
import Account from "./Components/Account/Account"
import MyPurchase from "./Pages/MyPurchase/MyPurchase";
import OrderDetail from "./Components/OrderDetail/OrderDetail"
import Contact from "./Pages/Contact/Contact";
import Discount from "./Pages/Discount/index"
import New from "./Pages/News/Index"
import ManagementOrder from "./Pages/ManagementOrder/Index"
import DetailSearch from  "./Pages/DetailSearch/Index"
import Footer from "./Components/Footer/Footer"
function App() {
  // const { login } = useSelector((state) => state.auth);
  return (
    <Router>
      {/* <NavBar /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Caterories />} />
          <Route path="/feedback" element={<Introduction />} />
          <Route path="/detailProduct/:id" element={<DetailProduct/>}/>
          <Route path="/checkout" element={<Order/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="/purchase" element={<MyPurchase/>}></Route>
          <Route path="/orderdetail" element={<OrderDetail/>}></Route>
          <Route path="/discount" element={<Discount/>}></Route>
          <Route path="/managementorder" element={<ManagementOrder/>}></Route>
          <Route path="/search/:key" element={<DetailSearch/>}></Route>
          <Route path="/new" element={<New/>}></Route>

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

