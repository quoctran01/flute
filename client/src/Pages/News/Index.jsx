import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AdminPage from "../../Pages/Admin/AdminPage";
import NavBar from "../../Components/NavBar/NavBar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CreateNew from "./CreateNew"
import { Form, Toast } from "react-bootstrap";
import parse from "html-react-parser";

const Index = () => {
  const [show, setShow] = useState(false);
  const [listNews, setListNews] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPage = 5;
  const lastIndex = currentPage * recordsPage;
  const firstIndex = lastIndex - recordsPage;
  const records = listNews.slice(firstIndex, lastIndex);
  const npage = Math.ceil(listNews.length / recordsPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleClose = () => setShow(false);

  const handleShow = (discount) => {

  };

  const handleDeleteNew = (id, index) => {
    axios.delete(`${process.env.REACT_APP_URL_LOCALHOST}/api/new/deleteNew/${id}`)
    setListNews(listNews.filter((o, i) => index !== i));
  }

  const prePage = () => {
    if (currentPage !== firstIndex) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) setCurrentPage(currentPage + 1);
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/new/allNews`)
      .then((res) => setListNews(res.data))
  },[])

  return (
    <div style={{ display: "flex" }}>
      <AdminPage />
      <div style={{ maxWidth: "100%" }} className="col-10">
        <NavBar />
        <CreateNew/>
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
              <th>Ảnh</th>
              <th>Phản Hồi</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {records?.map((item, index) => (
              <tr key={item._id} style={{fontSize: "13px"}}>
                <th>{index}</th>
                <th>
                  <img src={item.imageNew} width="80px" alt="" />
                </th>
                <th className="col-md-4"> 
                {parse(item.description)}
                </th>
                <th>
                  <button
                    className="handleBtn"
                    onClick={() => handleDeleteNew(item._id, index)}
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
                      onClick={() => handleShow(item)}
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
        <div style={{ textAlign: "center" }}>
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prePage}>
                  prve
                </a>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                >
                  <a
                    href="#"
                    className="page-link"
                    key={i}
                    onClick={() => changePage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin danh mục</Modal.Title>
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
            // value={discountCode}
            // onChange={(e) => setDiscountCode(e.target.value)}
          />
          <br></br>
          <Form.Control
            type="text"
            placeholder="Phần Trăm Khuyến Mãi"
            autoFocus
            floating
            // value={percentDiscount}
            // onChange={(e) => setPercentDicount(e.target.value)}
          />
          <br></br>
          <Button variant="secondary">Hủy</Button>
          <Button variant="primary">
            Sửa Thông Tin
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Index;
