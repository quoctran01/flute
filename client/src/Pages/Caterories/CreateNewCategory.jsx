import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Toast } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { CreateCategory } from "../../services/category";

const CreateNewCategory = ({ listCategories }) => {
  const [show, setShow] = useState(false);
  const [categoryCode, setCategoryCode] = useState("");
  const [categroyName, setNameCategory] = useState("");
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleCreate = () => {
    var checkCategory = listCategories.some((e) => {
      return e.categoryCode === categoryCode;
    });
    if (categoryCode === "" || categroyName === "")
      return alert("Bạn chưa điền thông tin");
    if (!checkCategory) {
      const newCategory = {
        categoryCode: categoryCode,
        categroyName: categroyName,
      };
      CreateCategory(newCategory);
      window.location.reload(false);
    } else {
      alert("Tồn tại mã danh mục")
    }
  };
  return (
    <div>
      <ToastContainer />
      <button onClick={handleShow}>Tạo Danh Mục</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Mã Danh Mục"
              autoFocus
              floating
              // value={categoryCode}
              onChange={(e) => setCategoryCode(e.target.value)}
            />
            <br></br>
            <Form.Control
              type="text"
              placeholder="Tên Danh mục"
              autoFocus
              floating
              // value={categroyName}
              onChange={(e) => setNameCategory(e.target.value)}
            />
            <br></br>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Hủy</Button>
          <Button variant="outline-success" onClick={handleCreate}>
            Tạo danh mục
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateNewCategory;
