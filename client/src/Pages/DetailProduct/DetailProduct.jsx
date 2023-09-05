import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header"
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import "./Detail.css"
import { useDispatch } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar"
import { AddCard } from "../../redux/cartSlice";
import ListProduct from "../../Components/ListProducts/ListProducts"
import Footer from "../../Components/Footer/Footer"
import { GetProduct } from "../../services/product";
const DetailProduct = () => {
  const params = useParams();
  const [detailProduct, setDetailProduct] = useState()
  const dispatch = useDispatch();

  const getProduct = () => {
     GetProduct(params.id)
      .then(res => {
        setDetailProduct(res.data)
      })
  }

  useEffect(() => {
    getProduct()
  },[])
  if(detailProduct)
  return (
    <div>
      <Header />
      <Container>
        <Row style={{marginTop:"20px"}}>
          <Col>
              <>
                <Row style={{borderTop:"1px solid #f0f0f0", height:"100px", borderBottom:"1px solid #f0f0f0"}}>
                    <h1 style={{color:"#212121", fontSize:"30px", display:"flex", alignItems:"center"}}>{detailProduct.nameProduct}</h1>
                </Row>
                <Row style={{marginTop:"20px"}}>
                  <Col>
                  
                        <img src={detailProduct.imageProduct} alt=""  style={{width:"400px"}}/>
                        <img
                src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1680424035/gq1ev2vwzhhewxpje7bk.jpg"
                className="img-fluid rounded"
                style={{ marginTop: "40px" }}
              />
                  </Col>
                    <Col>

                      <div style={{marginLeft:"20px"}}>
                <Row>
                    <span style={{fontSize:"32px", color:"#49b14d"}}>{Number(detailProduct.price).toLocaleString()}đ</span>
                </Row>               
                        {parse(detailProduct.description)}
                        <Button variant="success"
                          onClick={() => dispatch(AddCard(detailProduct)) }
                        >Thêm vào giỏ hàng</Button>
                      </div>
                    </Col>       
                </Row>
              </> 
            
          </Col>
          <SideBar/>
        </Row>
        {/* <ListProduct/> */}
      </Container>
      {/* <Footer/> */}
    </div>
  );
};

export default DetailProduct;
