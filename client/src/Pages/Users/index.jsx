import React, { useEffect, useState } from "react";
import AdminPage from "../../Pages/Admin/AdminPage";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./user.css";
import Navigate from "../../Components/Navigate/Navigate";
import { DeleteUser, EditUser } from "../../services/user";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavBar from "../../Components/NavBar/NavBar";
import CreateUser from "./CreateUser";
const Index = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idUserUpdate, setIdUserUpdate] = useState("");
  const [role, setRole] = useState();
  const idUserLogin = JSON.parse(localStorage.getItem("user"))._id;
  const handleClose = () => setShow(false);

  const handleShow = (user) => {
    setShow(true);
    setIdUserUpdate(user._id);
    localStorage.setItem("idUser", user._id);
    localStorage.setItem("userNeedManager", JSON.stringify(user));
    if (idUserLogin !== "6461ad41d6fdd9b2519594ee") {
      setShow(false);
      return alert("Bạn không được phép thao tác trên tài khoản này");
    }
  };

  const handleDelete = (e, id, index, navigate) => {
    e.preventDefault();
    if (idUserLogin !== "6461ad41d6fdd9b2519594ee")
      alert("Bạn không được phép thao tác trên tài khoản này");
    else {
      if (window.confirm("Xác nhận xóa") === true) {
        DeleteUser(id.toString(), navigate);
        setUsers(users.filter((o, i) => index !== i));
      }
    }
  };

  const handleEditUser = () => {
    const idUser = localStorage.getItem("idUser");

    if (userName === "" || email === "") {
      alert("Vui lòng kiểm tra lại thông tin");
    } else {
      const editUser = {
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        admin: role,
      };

      EditUser(idUser, editUser);
      window.location.reload();
    }
  };

  const handleChangeRole = () => {
    if (role === true) {
      setRole(!role);
      alert("Đã gỡ quyền truy cập của tài khoản này ");
    } else {
      setRole(!role);
      alert("Đã cấp quyền truy cập của tài khoản này ");
    }
  };

  useEffect(() => {
    if (idUserUpdate)
      axios
        .get(
          `${process.env.REACT_APP_URL_LOCALHOST}/api/user/getOneUser/${idUserUpdate}`
        )
        .then((res) => {
          setUserName(res.data.userName);
          setEmail(res.data.email);
          setPhoneNumber(res.data.phoneNumber);
          setRole(res.data.admin);
        });
  }, [idUserUpdate]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/getAllUsers`)
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div className="hai">
        <Navigate></Navigate>
      </div>
      <AdminPage />
      <div style={{ maxWidth: "100%" }} className="col-10">
        <NavBar />
        <CreateUser />
        <Table striped style={{ marginTop: "30px" }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Quyền truy cập</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id.toString()}
                style={{ textAlign: "center", alignItems: "center" }}
                className="inforUser"
              >
                <td>{index}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                {/* <td>{user.admin.toString()}</td> */}
                {user.admin === true ? <td>Admin</td> : <td>Người dùng</td>}
                <td>
                  <button
                    className="handleBtn"
                    onClick={(e) => handleDelete(e, user._id, index)}
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
                  <button
                    className="handleBtn"
                    // onClick={() => handleShow(user._id)}
                    onClick={() => handleShow(user)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fillRule="currentColor"
                      className="bi bi-vector-pen"
                      viewBox="0 0 16 16"
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
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thay đổi thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Tên tài khoản"
              autoFocus
              floating
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br></br>
            <Form.Control
              type="email"
              placeholder="Email"
              autoFocus
              floating
              value={email}
              // defaultValue={JSON.parse(localStorage.getItem("userNeedManager"))?.email ?? ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <Form.Control
              type="text"
              placeholder="Số điện thoại"
              autoFocus
              floating
              value={phoneNumber}
              // defaultValue={JSON.parse(localStorage.getItem("userNeedManager"))?.phoneNumber ?? ""}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br></br>

            <button onClick={handleChangeRole}>Cấp quyền</button>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="outline-success" onClick={handleEditUser}>
            Cập Nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Index;
