import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { registerAccout } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateUser = () => {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleChangeRole = () => {};

  const hanldeCreateUser = async () => {
    if (
      !email.match(process.env.REACT_APP_REGEX) &&
      userName !== ""
    ) {
      let newUser = {
        userName: userName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      };
      await axios.post(
        `${process.env.REACT_APP_URL_LOCALHOST}/api/user/register`,
        newUser
      );
      toast.success("Đăng ký thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Kiểm tra lại thông tin", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div>
      <ToastContainer />
      <button onClick={handleShow}>Tạo Tài Khoản Mới</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo Tài Khoản</Modal.Title>
        </Modal.Header>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        ></Form.Group>
        <Modal.Footer>
          <Form.Control
            type="text"
            placeholder="Tên tài khoản"
            autoFocus
            floating
            onChange={(e) => setUserName(e.target.value)}
          />
          <br></br>
          <Form.Control
            type="text"
            placeholder="Email"
            autoFocus
            floating
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <Form.Control
            type="text"
            placeholder="Số điện thoại"
            autoFocus
            floating
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br></br>
          <Form.Control
            type="password"
            placeholder="Mật khẩu"
            autoFocus
            floating
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleChangeRole}>Cấp quyền</button>
          <br></br>

          <Button variant="secondary">Hủy</Button>
          <Button onClick={hanldeCreateUser} variant="outline-success">
            Tạo Tài Khoản
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateUser;
