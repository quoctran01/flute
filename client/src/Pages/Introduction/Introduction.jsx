import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Col, Container, Form, Row, Toast } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import MenuBar from "../../Components/MenuBar/MenuBar";
import { EditorContent, useEditor } from "@tiptap/react";
import Header from "../../Components/Header/Header";
import parse from "html-react-parser";
import './index.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Introduction = () => {
  const [description, setDescription] = useState("");
  const [imgProduct, setImgProduct] = useState(null);
  const [urlImg, setUrlImg] = useState("");
  const [comments, setCommnets] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const recordsPage = 10;
  const lastIndex = currentPage * recordsPage;
  const firstIndex = lastIndex - recordsPage;
  const records = comments.slice(firstIndex, lastIndex);
  const npage = Math.ceil(comments.length / recordsPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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
          <p>....Phản hồi của bạn về sáo trúc Hải Trần, hãy cho chung tôi biết cảm nghĩ của bạn...</p>
        `,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });

  const handleSubmitReview = () => {
    const dataNew = {
      imageNew: urlImg,
      description: description,
    };
    if(description === "")
    return toast.success('Không để trống comment', {
      position: toast.POSITION.TOP_RIGHT
  });

    axios.post(
      `${process.env.REACT_APP_URL_LOCALHOST}/api/new/createNew`,
      dataNew
      );
    window.location.reload()
  };

  const prePage = () => {
    if(currentPage !== firstIndex)
        setCurrentPage(currentPage -1)
  }

  const nextPage = () => {
    if(currentPage !== lastIndex)
        setCurrentPage(currentPage +1)    
  }

  const changePage = (id) => {
      setCurrentPage(id)
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_LOCALHOST}/api/new/allNews/`)
      .then((res) => setCommnets(res.data.sort(function(a,b){return a.timestamp  - b.timestamp })));
  }, []);
  if (comments)
    return (
      <div>
        <Header />
        <ToastContainer/>
        <Container className="col-md-7">
          <Col>
            <MenuBar editor={editor} />
          </Col>
          <Row style={{ marginTop: "20px" }}>
            <Form.Control
              type="file"
              placeholder="Ảnh Bài Viết"
              autoFocus
              floating
              onChange={(event) => {
                setImgProduct(event.target.files[0]);
              }}
            />
            <br></br>{" "}
            <button type="submit" onClick={upLoadImage}>
              Thêm Ảnh
            </button>
            <EditorContent editor={editor} />
          </Row>
          <Button variant="outline-success" onClick={handleSubmitReview}>Gửi Phản Hồi</Button>
        </Container>
        <Container>
          {/* <MDBContainer fluid style={{ marginTop: "30px" }}>
            <h2 style={{ textAlign: "center" }}>PHẢN HỒI KHÁCH HÀNG</h2>
            {records.reverse().map((item) => (
              <MDBRow className="justify-content-center mb-0" key ={item._id}>
                <MDBCol md="12" xl="10">
                  <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                    <MDBCardBody>
                      <MDBRow>
                        <Row>{parse(item.description)}</Row>
                        <img
                          src={item.imageNew}
                          className="img-fluid rounded imgComment"
                          style={{ marginTop: "20px", width:"20%" }}
                        />
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard><hr></hr>
                </MDBCol>
              </MDBRow>
            ))}
          </MDBContainer> */}
          <section>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10">
            <MDBCard className="text-dark">
              {
                records.reverse().map((item) => (
                  <>

              <MDBCardBody className="p-4">
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1680894189/rtpqn98uzznnjmtnd6zv.jpg"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Ẩn Danh
                    </MDBTypography>
                    <div className="mb-0">
                      {parse(item.description)}
                    </div>
                    <div className="d-flex flex-start">
                  <MDBCardImage
                    // className="rounded-circle shadow-1-strong me-3"
                    src={item.imageNew}
                    alt="avatar"
                    width="100"
                    height="100"
                  />
                  <div>
                  </div>
                </div>
                  </div>
                </div>
              </MDBCardBody>
<hr className="my-0" />
                  </>

                ))
              }

            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
          <nav>
          <ul className="pagination" style={{textAlign:"center", marginLeft:"400px"}}>
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                prve
              </a>
            </li>
            {numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? "active" : ""}`} key={i}>
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
        </Container>
      </div>
    );
};

export default Introduction;
