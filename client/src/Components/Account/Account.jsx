import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import MyAccount from "../../Pages/MyAccount/MyAccount";
import NavAccount from "../NavAccount/NavAccount";
const Account = () => {
  const userLogin = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  if (userLogin === null || userLogin === undefined) {
    return (
      <>
        <Header />
        <Container style={{ textAlign: "center", marginTop: "30px" }}>
          <h5>Bạn chưa đăng nhập vào hệ thống</h5>
          <Button variant="outline-success" onClick={() => navigate("/")}>
            Quay lại trang chủ
          </Button>
        </Container>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col xs={1} lg={3}>
            <NavAccount />
          </Col>
          <Col xs={4}>
            <MyAccount />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Account;
