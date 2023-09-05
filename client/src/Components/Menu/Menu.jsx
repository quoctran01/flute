import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Dropdown,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./menu.css";
import { useState } from "react";
import { logout } from "../../redux/authSlice";
export default function Menu() {
  const navigate = useNavigate();
  const { login } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      <Container
        fluid
        style={{ minHeight: "40px", backgroundColor: "#34a853" }}
      >
        <Row className="nav__container nav-dropdown__row" style={{marginLeft:"500px"}}>
          <Col md={9} sm={6} xs={6} className="nav-dropdown__col">
            <Navbar style={{ padding: "0" }}>
              <Nav>
                <Dropdown>
                  <Dropdown.Toggle className="nav-dropdown">
                    DANH MỤC
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/"
                      className="nav-dropdown-btn"
                    >
                      TRANG CHỦ
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/"
                      className="nav-dropdown-btn"
                    >
                      DANH MỤC
                    </Dropdown.Item>

                    <Dropdown.Item
                      as={Link}
                      to="/feedback"
                      className="nav-dropdown-btn"
                    >
                      PHẢN HỒI
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/"
                      className="nav-dropdown-btn"
                    >
                      LIÊN HỆ
                    </Dropdown.Item>
                    <Dropdown.Item className="nav-dropdown-btn">
                      <a onClick={() => navigate("/cart")}>GIỎ HÀNG</a>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Nav.Link
                  style={{ paddingLeft: "0" }}
                  as={Link}
                  to="/"
                  className="nav-link-btn"
                >
                  TRANG CHỦ
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="nav-link-btn">
                  SẢN PHẨM
                </Nav.Link>
                <Nav.Link as={Link} to="/feedback" className="nav-link-btn">
                  PHẢN HỒI
                </Nav.Link>

                <Nav.Link as={Link} to="/contact" className="nav-link-btn">
                  LIÊN HỆ
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
