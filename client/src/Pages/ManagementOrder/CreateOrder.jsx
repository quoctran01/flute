import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import { Form, Toast } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const CreateDiscount = () => {
    const [show, setShow] = useState(false);
    const [discountCode, setDiscountCode] = useState();
    const [percentDiscount, setPercentDicount] = useState();
    const handleClose = () => setShow(false);
  
    const handleShow = () => {
      setShow(true);
    };

    const handleCreateDiscount = () => {
        const discount = {
            discountCode: discountCode,
            percentDiscount: percentDiscount
        }
       
        if(discountCode === "" || percentDiscount === "")
        toast.error('Kiểm tra lại thông tin  !', {
            position: toast.POSITION.TOP_RIGHT
        });
        axios.post(`${process.env.REACT_APP_URL_LOCALHOST}/api/discount/createDiscount`,discount)
        window.location.reload(false);
    }
  return (
    <div>
        <ToastContainer/>
        <button onClick={handleShow}>Tạo Đơn Hàng</button>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo Đơn Hàng Mới</Modal.Title>
        </Modal.Header>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        ></Form.Group>
        <Modal.Footer>
          <Form.Control
            type="text"
            placeholder="Mã Khuyến Mãi"
            autoFocus
            floating
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <br></br>
          <Form.Control
            type="text"
            placeholder="Phần Trăm Khuyến Mãi"
            autoFocus
            floating
            value={percentDiscount}
            onChange={(e) => setPercentDicount(e.target.value)}
          />
          <br></br>
          <Button variant="secondary">Hủy</Button>
          <Button variant="primary" onClick={handleCreateDiscount}>
            Tạo Khuyến Mãi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CreateDiscount