import React, { useEffect, useState } from "react";
import { Col, Table } from "react-bootstrap";
import AdminPage from "../../Pages/Admin/AdminPage";
import NavBar from "../../Components/NavBar/NavBar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Form } from "react-bootstrap";
import CreateOrder from "./CreateOrder";
import { ToastContainer, toast } from "react-toastify";
import { GetAllOrder, GetOrder, UpDateOrder } from "../../services/order";
const Index = () => {
  const [show, setShow] = useState(false);
  const [listOrders, setListOrders] = useState([]);
  // const totalSales = listOrders.map((item) => item.total);
  const [idOrder, setIdOrder] = useState();
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [showProduct, setShowProduct] = useState(false);
  const [productOrders, setProductOrders] = useState();
  const [orderItem, setOrderItem] = useState("");
  const [statistics, setStatistics] = useState(true);
  const options = ["Chờ gói hàng", "Đang vận chuyển", "Giao hàng thành công"];

  // total order successfully
  const totalSales = listOrders.filter((item) => {
    if (item.status === "Giao hàng thành công") {
      return item;
    }
  });

  const arrOfNum = totalSales.map((str) => {
    return parseInt(str.total, 10);
  });

  const sumSale = arrOfNum.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  //totla order is delivering
  const totalDelivered = listOrders.filter((item) => {
    if (item.status === "Đang vận chuyển") {
      return item;
    }
  });

  const arrOfDeli = totalDelivered.map((str) => {
    return parseInt(str.total, 10);
  });

  const sumDelivered = arrOfDeli.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const handleClose = () => setShow(false);
  const handleShowProduct = (id) => {
    setIdOrder(id);
    setShowProduct(true);
  };

  const handleChange = () => {
    setStatistics(!statistics);
  };
  const handleShow = (order) => {
    setShow(true);
    setIdOrder(order._id);
  };

  const handleDeleteOrder = (id, index) => {
    if (window.confirm("Xác nhận xóa đơn hàng") === true) {
      axios.delete(
        `${process.env.REACT_APP_URL_LOCALHOST}/api/order/deleteOrder/${id}`
      );
      setListOrders(listOrders.filter((o, i) => index !== i));
    }
  };

  const handleUpdateOrder = () => {
    if (status === "" || address === "" || note === "") {
      toast.error("Kiểm tra lại thông tin", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    const dataUpdate = {
      status: status,
      address: address,
      note: note,
    };

    UpDateOrder(idOrder, dataUpdate);
    toast.success("Cập nhập thành công", {
      position: toast.POSITION.TOP_RIGHT,
    });
    window.location.reload();
    if (status === "Giao hàng thành công")
      axios.post(
        `${process.env.REACT_APP_URL_LOCALHOST}/api/order/orderSuccess`,
        { idOrder }
      );
  };

  const handleSearchItemOrder = () => {
    if (orderItem) {
      GetOrder(orderItem).then((res) => {
        setListOrders([res.data]);
      });
    } else {
      alert("Đơn hàng không tồn tại!");
    }
  };

  const handleGetAllOrder = () => {
    GetAllOrder().then((res) => setListOrders(res.data));
  };

  const onOptionChangeHandler = (e) => {
    e.preventDefault();
    // setCategory(event.target.value)
    setStatus(e.target.value);
  };

  useEffect(() => {
    if (idOrder)
      GetOrder(idOrder).then((res) => {
        setStatus(res.data.status);
        setAddress(res.data.address);
        setNote(res.data.note);
        setProductOrders(res.data.productOrder);
      });
  }, [idOrder]);

  useEffect(() => {
    GetAllOrder().then((res) => setListOrders(res.data));
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <AdminPage />
      <ToastContainer />
      <div style={{ maxWidth: "100%" }} className="col-10">
        <NavBar />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {/* <CreateOrder /> */}
            <button onClick={handleChange}>Thống Kê</button>
            <br />
            <button onClick={handleGetAllOrder}>Danh Sách Đơn</button>
          </div>
          <div>
            <input type="text" onChange={(e) => setOrderItem(e.target.value)} />
            <button onClick={handleSearchItemOrder}>search</button>
          </div>
        </div>
        {statistics ? (
          <Table striped style={{ marginTop: "30px" }}>
            <thead>
              <tr
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                <th style={{ width: "50px" }}>STT</th>
                <th>Mã Đơn Hàng</th>
                <th>Tình Trạng</th>
                <th>Địa Chỉ Nhận</th>
                <th>Ghi Chú</th>
                <th>Mã Khách Hàng</th>
                <th>Sản Phẩm Đặt</th>
                <th>Tổng Đơn</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {listOrders?.map((order, index) => (
                <tr
                  key={order._id.toString()}
                  //   className="inforProduct"
                  //   id="product"
                  style={{ fontSize: "13px" }}
                >
                  <th>{index}</th>
                  <th>{order._id}</th>
                  <th>{order.status}</th>
                  <th>{order.address}</th>
                  <th>{order.note}</th>
                  <th>{order.user}</th>
                  <th>
                    <button onClick={() => handleShowProduct(order._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </button>
                  </th>
                  <th>{Number(order.total).toLocaleString()}đ</th>
                  <th>
                    <button
                      className="handleBtn"
                      onClick={() => handleDeleteOrder(order._id, index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fillRule="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                    <button className="handleBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fillRule="currentColor"
                        className="bi bi-vector-pen"
                        viewBox="0 0 16 16"
                        onClick={() => handleShow(order)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"
                        />
                      </svg>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Table striped bordered hover style={{ marginTop: "40px" }}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Sô Tiền Hàng Đang Giao</th>
                <th>Số Tiền Giao Thành Công</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td>1</td>
                <td>Số tiền: {Number(sumDelivered).toLocaleString()}đ</td>
                <td>
                  <b>Số tiền: {Number(sumSale).toLocaleString()}đ</b>
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa Thông Tin Đơn Hàng</Modal.Title>
        </Modal.Header>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        ></Form.Group>
        <Modal.Footer>
          <div class="col-xs-2">
            <select onChange={onOptionChangeHandler} style={{ width: "auto" }}>
              <option>Tình Trạng</option>
              {options.map((item) => (
                <option>{item}</option>
              ))}
            </select>
          </div>

          <br></br>
          <Form.Control
            type="text"
            placeholder="Địa Chỉ Nhận"
            autoFocus
            floating
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br></br>
          <Form.Control
            type="text"
            placeholder="Ghi Chú"
            autoFocus
            floating
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <br></br>
          <Button variant="secondary">Hủy</Button>
          <Button variant="primary" onClick={handleUpdateOrder}>
            Sửa Thông Tin
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showProduct}
        onHide={() => setShowProduct(false)}
        dialogClassName="modal-90w"
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped style={{ marginTop: "30px" }}>
            <thead>
              <tr
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                <th>STT</th>
                <th>Ảnh Sản Phẩm</th>
                <th>Tên Sản Phẩm</th>
                <th>Số Lượng</th>
                <th>Đơn Giá</th>
                <th>Thành Tiền</th>
              </tr>
            </thead>
            <tbody>
              {productOrders?.map((item, index) => (
                <tr key={item._id} style={{ textAlign: "center" }}>
                  <td>{index}</td>
                  <td>
                    <img src={item.imageProduct} width="80px" alt="" />
                  </td>
                  <td>{item.nameProduct}</td>
                  <td>{item.quantity}</td>
                  <td>{Number(item.price).toLocaleString()}đ</td>
                  <td>
                    {Number(item.quantity * item.price).toLocaleString()}đ
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Index;
