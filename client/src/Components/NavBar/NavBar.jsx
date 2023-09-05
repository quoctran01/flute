import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  const [user,setUSer] = useState(null);
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-home"> Trang Chủ </Link>
      {user? (
        <>
        <p className="navbar-user">Hi, <span> {user}  </span> </p>
        <Link to="/logout" className="navbar-logout"> Log out</Link>
        </>
      ) : (    
        <>
      <Link to="/login" className="navbar-login"> Đăng Nhập </Link>
      <Link to="/register" className="navbar-register"> Đăng ký</Link>
      </>
)}
    </nav>
  );
};

export default NavBar;
