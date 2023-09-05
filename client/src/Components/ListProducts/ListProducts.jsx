import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { GetAllProduct } from "../../services/product";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { AddCard } from "../../redux/cartSlice";
import axios from "axios";
import "./List.css";
import { ToastContainer, toast } from "react-toastify";
import { GetAllCategory } from "../../services/category";
const db = require("../../db.json");
export default function ListProduct() {
  const [ListProducts, setListProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hanndleShowProduct = (id) => {
    const dataProduct = product.filter((item) => item.category === id);
    setListProducts(dataProduct);
    document.getElementById('bestSale').style.display = "none"
    document.getElementById('bestSaleHeader').style.display = "none"
  };
  const handleAllProduct = () => {
    GetAllProduct().then((res) => {
      setListProducts(res.data);
    });
    window.location.reload()
  };

  const handleAddCart = (item) => {
    dispatch(AddCard(item));
    toast.success("Sản Phẩm Đã Được Thêm Vào Giỏ Hàng", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
      GetAllCategory()
      .then((res) => setCategory(res.data));
  }, []);

  useEffect(() => {
    GetAllProduct().then((res) => {
      setListProducts(res.data);
      setProduct(res.data);
    });
  }, []);
  return (
    <div className="App">
      <ToastContainer />
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <Card style={{ marginTop: "80px" }} className="col-md-3">
              <Card.Header style={{ textAlign: "center" }}>
                <div className="flip-animation">
                  <span>D</span>
                  <span>A</span>
                  <span>N</span>
                  <span>H</span>
                  <span>&nbsp;</span>
                  <span>M</span>
                  <span>Ụ</span>
                  <span>C</span>
                  <span>&nbsp;</span>
                  <span>S</span>
                  <span>Ả</span>
                  <span>N</span>
                  <span>&nbsp;</span>
                  <span>P</span>
                  <span>H</span>
                  <span>Ẩ</span>
                  <span>M</span>
                </div>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="category" onClick={handleAllProduct}>
                  TẤT CẢ SẢN PHẨM
                </ListGroup.Item>
                <ListGroup.Item className="category" onClick={handleAllProduct}>
                  SẢN PHẢM BÁN CHẠY
                </ListGroup.Item>
                {category?.map((item, id) => (
                  <ListGroup.Item
                    className="category"
                    key={item._id}
                    onClick={() => hanndleShowProduct(item._id)}
                  >
                    {item.categroyName}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <img
                src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1680424035/gq1ev2vwzhhewxpje7bk.jpg"
                className="img-fluid rounded"
                style={{ marginTop: "40px" }}
              />
              <Card.Header style={{ textAlign: "center" }}>
                SÁO TRÚC HẢI TRẦN
              </Card.Header>
              <ListGroup variant="flush" className="listSong">
                <ListGroup.Item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                  <NavLink to="https://www.youtube.com/watch?v=h4FOTmqX7jE">
                    Về Quê - Sáo Trúc Hải Trần
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                  <NavLink to="https://www.youtube.com/watch?v=7CcwKNVOkKg">
                    Quê Hương - Sáo Trúc Hải Trần
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                  <NavLink to="https://www.youtube.com/watch?v=nQpXzaYdW6o">
                    Liên Khúc Về Quê - Sáo Trúc Hải Trần
                  </NavLink>
                  <video width="250" height="400" controls>
                    <source src="https://res.cloudinary.com/uploadimgvvv/video/upload/v1680510452/d9w0bi21ipbk2ufdxgo2.mp4" />
                  </video>
                </ListGroup.Item>
                <ListGroup.Item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                  <NavLink to="https://www.youtube.com/watch?v=nQpXzaYdW6o">
                    Test Sáo C5 - Hải Trần
                  </NavLink>
                  <video width="250" height="400" controls>
                    <source src="https://res.cloudinary.com/uploadimgvvv/video/upload/v1680463716/yqzlf8oprq2rcjidfk2j.mp4" />
                  </video>
                </ListGroup.Item>
                <ListGroup.Item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                  <NavLink to="https://www.youtube.com/watch?v=nQpXzaYdW6o">
                    Test Sáo BB4 - Hải Trần
                  </NavLink>
                  <video width="250" height="400" controls>
                    <source src="https://res.cloudinary.com/uploadimgvvv/video/upload/v1680464011/bdskzmyeiy8c7a1wgoys.mp4" />
                  </video>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            <main className="col-md-9">
              <header className="border-bottom mb-4 pb-3" id="bestSaleHeader">
                <div
                  className="form-inline"
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  <h2 className="mr-md-auto">SẢN PHẨM BÁN CHẠY</h2>
                </div>
              </header>
              <div className="row" id="bestSale">
                {db.map((item, index) => (
                  <div className="col-md-3" key={item._id}>
                    <figure className="card card-product-grid">
                      <div className="img-wrap">
                        <NavLink
                          to={`detailProduct/${item._id}`}
                          className="bg-image rounded hover-zoom"
                        >
                          <img
                            src={item.imageProduct}
                            className="img-fluid rounded imgItem"
                          />
                        </NavLink>
                      </div>
                      <figcaption
                        className="info-wrap"
                        style={{ textAlign: "center" }}
                      >
                        <div
                          className="fix-height"
                          style={{ marginTop: "20px" }}
                        >
                          <span className="title">{item.nameProduct}</span>
                          <div className="price-wrap mt-2">
                            <span
                              className="price"
                              style={{ fontSize: "15px", color: "#49b14d" }}
                            >
                              {Number(item.price).toLocaleString()} đ
                            </span>
                          </div>
                        </div>
                        <Button
                          size="small"
                          // onClick={() => dispatch(AddCard(item))}
                          onClick={() => handleAddCart(item)}
                        >
                          Mua Hàng
                        </Button>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
              <header className="border-bottom mb-4 pb-3">
                <div
                  className="form-inline"
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  <h2 className="mr-md-auto">SẢN PHẨM CỬA HÀNG</h2>
                </div>
              </header>

              <div className="row">
                {ListProducts.map((item, index) => (
                  <div className="col-md-3" key={item._id}>
                    <figure className="card card-product-grid">
                      <div className="img-wrap">
                        <NavLink
                          to={`detailProduct/${item._id}`}
                          className="bg-image rounded hover-zoom"
                        >
                          <img
                            src={item.imageProduct}
                            className="img-fluid rounded imgItem"
                          />
                        </NavLink>
                      </div>
                      <figcaption
                        className="info-wrap"
                        style={{ textAlign: "center" }}
                      >
                        <div
                          className="fix-height"
                          style={{ marginTop: "20px" }}
                        >
                          <span className="title">{item.nameProduct}</span>
                          <div className="price-wrap mt-2">
                            <span
                              className="price"
                              style={{ fontSize: "15px", color: "#49b14d" }}
                            >
                              {Number(item.price).toLocaleString()} đ
                            </span>
                          </div>
                        </div>
                        <Button
                          size="small"
                          // onClick={() => dispatch(AddCard(item))}
                          onClick={() => handleAddCart(item)}
                        >
                          Thêm giỏ hàng
                        </Button>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
