import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { UpdateUser } from "../../services/accoutn";

const Model = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("user"))?.email ?? ""
  );
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("user"))?.userName ?? ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    JSON.parse(localStorage.getItem("user"))?.phoneNumber ?? ""
  );
  const [password, setPassword] = useState("");
  // const [confirmPass, setConfirmPass] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const idUser = JSON.parse(localStorage.getItem("user"))._id;
  const dataUserUpdate = {
    userName: username,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
  };
  const handleSave = () => {
    UpdateUser(idUser, dataUserUpdate);
  };
  return (
    <>
      <Button
        style={{ marginTop: "20px" }}
        variant="outline-success"
        onClick={handleShow}
      >
        Thay đổi thông tin
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thay Đổi Thông Tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                floating
                // defaultValue={JSON.parse(localStorage.getItem("user"))?.email ?? ""}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br></br>
              <Form.Control
                type="text"
                placeholder="username"
                autoFocus
                // defaultValue={JSON.parse(localStorage.getItem("user"))?.userName ?? ""}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <br></br>
              <Form.Control
                type="text"
                placeholder="phone"
                autoFocus
                // defaultValue={JSON.parse(localStorage.getItem("user"))?.userName ?? ""}
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
              <br></br>
              <Form.Control
                type="password"
                placeholder="********"
                autoFocus
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <br></br>
              <Form.Control
                type="password"
                placeholder="********"
                autoFocus
                onChange={(e) => setConfirmPass(e.target.value)}
              /> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Model;
