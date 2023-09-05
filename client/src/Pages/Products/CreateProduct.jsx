import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NewProduct } from "../../services/product";
import MenuBar from "../../Components/MenuBar/MenuBar";
import { ToastContainer, toast } from "react-toastify";
const CreateProduct = ({ products }) => {
  const [show, setShow] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgProduct, setImgProduct] = useState(null);
  const [urlImg, setUrlImg] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const upLoadImage = (e) => {
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

  const createProduct = () => {
    var checkProductCode = products.some((e) => {
      return e.productCode === productCode;
    });

    if (!checkProductCode) {
      const product = {
        productCode: productCode,
        nameProduct: nameProduct,
        price: price,
        imageProduct: urlImg,
        quantity: quantity,
        description: description,
        category: category,
      };
      NewProduct(product);
      toast.success("Tạo sản phẩm thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setShow(false);
      window.location.reload(false);
    } else {
      toast.error("Tồn tại mã sản phẩm", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const [options, setOptions] = useState([]);

  const onOptionChangeHandler = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_LOCALHOST}/api/category/getAllCategory`)
      .then((res) => {
        setOptions(res.data);
      });
  }, []);
  return (
    <div>
      <ToastContainer />
      <button onClick={handleShow}>Thêm sản phẩm</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Mã Sản Phẩm"
              autoFocus
              floating
              onChange={(e) => setProductCode(e.target.value)}
            />
            <br></br>

            <Form.Control
              type="text"
              placeholder="Tên sản phẩm"
              autoFocus
              floating
              onChange={(e) => setNameProduct(e.target.value)}
            />
            <br></br>

            <Form.Control
              type="text"
              placeholder="Gia"
              autoFocus
              floating
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
              onChange={(e) => setQuantity(e.target.value)}
            />
            <br></br>
            <br></br>
            <div>
              <MenuBar editor={editor} />
              <EditorContent editor={editor} />
            </div>
            <label htmlFor="">Danh Mục</label>
            <br />
            <select onChange={onOptionChangeHandler}>
              <option>Please choose one option</option>
              {options.map((option, index) => {
                return (
                  <option key={index} value={option._id}>
                    {option.categroyName}
                  </option>
                );
              })}
            </select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="outline-success" onClick={createProduct}>
            Tạo
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateProduct;
