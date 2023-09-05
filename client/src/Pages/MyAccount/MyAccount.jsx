import { Modal } from "@mui/material";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Model from "../../Components/Modal/Model"
const MyAccount = () => {
  return (
    <div style={{marginLeft:"40px"}}>
      <h5>Hồ Sơ Của Tôi</h5>
      <hr />
      <div style={{ marginLeft: "50px", marginTop: "40px", height: "300px" }}>
        <div className="ffg">
          <Row style={{ marginBottom: "30px" }}>
            <Col>Tên đăng nhập:</Col>
            <Col>{JSON.parse(localStorage.getItem("user"))?.userName ?? ""} </Col>
          </Row>
          <Row style={{ marginBottom: "30px" }}>
            <Col>Email:</Col>
            <Col>{JSON.parse(localStorage.getItem("user"))?.email ?? ""}</Col></Row>
          <Row>
            <Col>Số điện thoại:</Col>
            <Col>{JSON.parse(localStorage.getItem("user"))?.phoneNumber ?? ""}</Col>
          </Row>
        </div>
        <Model/>
      </div>
      
    </div>
  );
};

export default MyAccount;
