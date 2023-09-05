import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import NavAccount from "../../Components/NavAccount/NavAccount";

const MyPurchase = () => {

  const [per, setPer] = useState({})
  const[listPurchase, setListPurchase] = useState([])
  const orders = JSON.parse(localStorage.getItem("user").toString()).order

  const handleCheck =  (item) => {
     axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/order/getOrder`, {id: JSON.parse(localStorage.getItem("user"))._id})
      .then((res) =>{
        
      } )
    }
  return (
    <>
      <Header></Header>
      <Container style={{marginTop:"10px"}}>
        <Row>
          <Col md={3}>
            <NavAccount />
          </Col>
          <Col>
            {
              orders.map((item, index) => (
                <div key = {index}>
                  <p>ma don</p> <>{item}</>
                  <button onClick={() => handleCheck(item)}>Chi tiết</button>
                </div>
              ))
            }

          </Col>
          <Col>
{/* {
  per?.productOrder.map((item) => (
    <div>
      <p>{item.productCode}</p>
      <p>{item.nameProduct}</p>
    </div>
  ))
} */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPurchase;
