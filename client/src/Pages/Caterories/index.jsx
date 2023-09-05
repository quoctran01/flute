import React, { useState } from "react";
import AdminPage from "../../Pages/Admin/AdminPage";
import Container from "react-bootstrap/esm/Container";
import { Form, Toast } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavBar from "../../Components/NavBar/NavBar";
import Table from "react-bootstrap/Table";
import {
  CreateCategory,
  DeleteCategory,
  GetAllCategory,
  UpdateCategory,
} from "../../services/category";
import CreateNewCategory from "./CreateNewCategory";
const Index = () => {
  const [show, setShow] = useState(false);
  const [listCategories, setListCategories] = useState([]);
  const [categoryCode, setCategoryCode] = useState("");
  const [categroyName, setNameCategory] = useState("");
  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setShow(true);
    localStorage.setItem("idCategory", id);
  };

  const handleDelete = (id, index) => {
    if (window.confirm(`Bạn có xác nhận xóa danh mục`) === true) {
      DeleteCategory(id);
      setListCategories(listCategories.filter((o, i) => index !== i));
    }
  };

  const handleUpdate = () => {
    const category = {
      categoryCode: categoryCode,
      categroyName: categroyName,
    };
    if (categoryCode === "" || categroyName === "")
      return alert("Bạn chưa điền thông tin");
    else {
      UpdateCategory(localStorage.getItem("idCategory"), category);
      window.location.reload(false);
    }
  };
  useEffect(() => {
    GetAllCategory().then((res) => {
      setListCategories(res.data);
    });
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <AdminPage />
      <div style={{ maxWidth: "100%" }} className="col-10">
        <NavBar />
        <CreateNewCategory listCategories={listCategories}/>
        <Table striped style={{ marginTop: "30px" }}>
          <thead>
            <tr
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              <th>STT</th>
              <th>Mã danh mục</th>
              <th>Tên danh mục</th>
              <th>Số Lượng</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {listCategories.map((category, index) => (
              <tr
                key={category._id.toString()}
                className="inforProduct"
                id="product"
                style={{ fontSize: "13px" }}
              >
                <th>{index}</th>
                <th>{category.categoryCode}</th>
                <th>{category.categroyName}</th>
                <th>{category.products.length}</th>
                <th>
                  <button
                    className="handleBtn"
                    onClick={() => handleDelete(category._id, index)}
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
                      onClick={() => handleShow(category._id)}
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
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin danh mục</Modal.Title>
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
          <Button variant="outline-success" id="hehe" onClick={handleUpdate}>
            Sửa danh mục
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Index;
