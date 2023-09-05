import React, { useEffect, useState } from "react";
import AdminPage from "../../Pages/Admin/AdminPage";
import Table from "react-bootstrap/Table";
import axios from "axios";
import StarterKit from "@tiptap/starter-kit";
import "./product.css";
import { DeleteProduct, UpdateProduct } from "../../services/product";
import CreateProduct from "./CreateProduct";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavBar from "../../Components/NavBar/NavBar";
import MenuBar from "../../Components/MenuBar/MenuBar";
import { Form, Toast } from "react-bootstrap";
import { EditorContent, useEditor } from "@tiptap/react";
import Paginator from "react-hooks-paginator";
import parse from "html-react-parser";
const Index = () => {
  const [products, setProducts] = useState([]);
  const [productCode, setProductCode] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgProduct, setImgProduct] = useState(null);
  const [urlImg, setUrlImg] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);
  const [idproduct, setIDProduct] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPage = 5;
  const lastIndex = currentPage * recordsPage;
  const firstIndex = lastIndex - recordsPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const idProductUpdate = localStorage.getItem("idProductUpdate");
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setIDProduct(id);
    localStorage.setItem("idProductUpdate", id);
  };

  const handleDelete = (e, id, index) => {
    e.preventDefault();
    if (window.confirm("Xác nhận xóa sản phẩm") == true) {
      DeleteProduct(id);
      setProducts(products.filter((o, i) => index !== i));
    }
  };

  const handleUpdateProduct = () => {
    const product = {
      productCode: productCode,
      nameProduct: nameProduct,
      price: price,
      imageProduct: urlImg,
      quantity: quantity,
      description: description,
    };

    UpdateProduct(product, idProductUpdate);
  };
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
        Mô tả sản phẩm
      </p>
    `,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });
  const upLoadImage = (e) => {
    // setImgProduct(e.target.files[0]);

    const formData = new FormData();
    formData.append("file", imgProduct);
    formData.append("upload_preset", "rahh7f3b");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/uploadimgvvv/image/upload",
        formData
      )
      .then((res) => setUrlImg(res.data.url));
  };

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
    if (idproduct)
      axios
        .get(
          `${process.env.REACT_APP_URL_LOCALHOST}/api/product/getProduct/${idproduct}`
        )
        .then((res) => {
          setProductCode(res.data.productCode);
          setNameProduct(res.data.nameProduct);
          setPrice(res.data.price);
          setQuantity(res.data.quantity);
          setUrlImg(res.data.imageProduct);
          setDescription(res.data.description);
        });
  }, [idProductUpdate]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/getAllProducts`)
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <AdminPage />
      <div style={{ maxWidth: "100%" }} className="col-10">
        <NavBar />
        <CreateProduct products={products} />
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
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Ảnh sản phẩm</th>
              <th>Số lượng còn</th>
              {/* <th>Danh mục</th> */}
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody className="ffsd">
            {records.map((product, index) => (
              <tr
                key={product._id.toString()}
                className="inforProduct"
                id="product"
                style={{ fontSize: "13px" }}
              >
                <th>{index}</th>
                <th>{product.productCode}</th>
                <th>{product.nameProduct}</th>
                <th>{product.price}</th>
                <th>
                  <img src={product.imageProduct} width="80px" alt="" />
                </th>
                <th>{product.quantity}</th>
                {/* <th>{parse(product.description)}</th> */}
                <th>
                  <button
                    className="handleBtn"
                    onClick={(e) => handleDelete(e, product._id, index)}
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
                      onClick={() => handleShow(product._id)}
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
                  key={i}
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
          <Modal.Title>Sửa thông tin sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Mã Sản Phẩm"
              autoFocus
              floating
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
            />
            <br></br>
            <Form.Control
              type="text"
              placeholder="Tên sản phẩm"
              autoFocus
              floating
              value={nameProduct}
              onChange={(e) => setNameProduct(e.target.value)}
            />
            <br></br>
            <Form.Control
              type="text"
              placeholder="Gia"
              autoFocus
              floating
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br></br>
            <Form.Control
              type="file"
              autoFocus
              floating
              onChange={(event) => {
                setImgProduct(event.target.files[0]);
              }}
            />
            <br></br>
            <button type="submit" onClick={upLoadImage}>
              Gửi ảnh
            </button>
            <br></br>
            <Form.Control
              type="text"
              placeholder="Số Lượng"
              autoFocus
              floating
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <br></br>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
            {/* <Form.Control
                type="text"
                placeholder="Mô tả"
                autoFocus
                floating
                onChange={(e) => setDescription(e.target.value)}
              /><br></br> */}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Hủy</Button>
          <Button variant="outline-success" onClick={handleUpdateProduct}>
            Cập nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Index;
