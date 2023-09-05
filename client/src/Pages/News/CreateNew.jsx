import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Toast } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import MenuBar from "../../Components/MenuBar/MenuBar";
import TipTap from "../../Components/TipTap/TipTap";
import { EditorContent, useEditor } from "@tiptap/react";
const CreateNew = () => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const editor = useEditor({
    extensions: [StarterKit],
    content: `
          <p>Mô Tả</p>
        `,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });
  return (
    <div>
      <ToastContainer />
      <Button variant="outline-success" onClick={handleShow}>Tạo bài viết</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo Thông Tin Mới</Modal.Title>
        </Modal.Header>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        ></Form.Group>
        <Modal.Footer>
          <Form.Control
            type="text"
            placeholder="Tiêu Đề Bài Viết"
            autoFocus
            floating
          />
          <br></br>
          <Form.Control
            type="file"
            placeholder="Ảnh Bài Viết"
            autoFocus
            floating
          />
          <br></br> <button type="submit">Gửi ảnh</button>
          <br></br>
          <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
          </div>
          <Button variant="secondary">Hủy</Button>
          <Button variant="success">Lưu</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateNew;
