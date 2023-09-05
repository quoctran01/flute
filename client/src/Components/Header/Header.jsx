import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { CardMedia } from "@mui/material";
import { Dropdown } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MenuHeder from "../../Components/Menu/Menu";
import { useState } from "react";
import "./header.css";

function ResponsiveAppBar() {
  const [productSearch, setProductSearch] = useState("");
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const handleNavigate = () => {
    if (productSearch !== "") navigate("/");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.clear();
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#49b14d" }}>
      <Container maxWidth="xl" sx={{ display: "flex", marginTop: "10px" }}>
        <Toolbar
          disableGutters
          sx={{
            marginLeft: "90px",
            marginRight: "90px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "7%",
            }}
            image="https://res.cloudinary.com/uploadimgvvv/image/upload/v1677085248/vjqoro1nzshossf8nebz.png"
            alt="random"
            onClick={() => {
              navigate("/");
            }}
          />
          <InputGroup
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              marginLeft: "80px",
            }}
          >
            <Form.Control
              placeholder="Nhập thông tin sản phẩm cần tìm kiếm"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onClick={handleNavigate}
              onChange={(e) => {
                setProductSearch(e.target.value);
              }}
            />
            <NavLink
              to={`search/${productSearch}`}
              className="bg-image rounded hover-zoom"
              style={{ textDecoration: "none", color:"white" }}
              onClick={handleNavigate}
            >
              <Button variant="outline-success" id="button-addon2">
                Tìm Kiếm
              </Button>
            </NavLink>
          </InputGroup>
          <Box sx={{ marginRight: "10px" }}>
            <a variant="success" onClick={() => navigate("/cart")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-cart4 xx"
                viewBox="0 0 16 16"
                fill="white"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </a>
          </Box>
          {/* <span style={{ position: "relative", right: "10px", bottom: "10px" }}>
            {cart.cartlists.length}
          </span> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                    fill="white"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {userLogin ? (
                    <>
                      <Dropdown.Item
                        onClick={() => {
                          userLogin.userName === "admin"
                            ? navigate("/admin")
                            : navigate("/account");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-person"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>
                        {userLogin.userName}
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        Đăng Xuất
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item onClick={() => navigate("/account")}>
                        Tài Khoản
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => navigate("/login")}>
                        Đăng Nhập
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => navigate("/register")}>
                        Đăng Ký
                      </Dropdown.Item>
                    </>
                  )}
                  {/* <Dropdown.Item onClick={() => navigate("/login")}>
                    Đăng Nhập
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate("/register")}>
                    Đăng Ký
                  </Dropdown.Item> */}
                  {/* <Dropdown.Item onClick={handleLogout}>
                    Đăng Xuất
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <MenuHeder />
    </AppBar>
  );
}
export default ResponsiveAppBar;
