import { Button, Card, Container, Table, Form, Alert } from "react-bootstrap";
import { FaPlus, FaUndo } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import DataUser from "./DataUser";

function ManageUser() {
  const API_URL = "http://localhost:5000/api/users";
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleUser, setRoleUser] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  function getData() {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        setUsers(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const postData = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/api/register', {
            nama: name,
            email: email,
            password: password,
            confPassword: password
        }).then(res => {
            setMsg(res.data.msg)
        });
        resetForm();
        navigate("/");
        
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
}

  const resetForm = () => {
    setNim("");
    setNama("");
    setEmail("");
    setTelp("");
  };

  return (
    <section className="hero d-flex align-items-center section-bg" id="hero" style={{height:"700px"}}>
    <Container>
      <Card>
        <Card.Header as="h5">Tabel Users</Card.Header>
        <Card.Body>
          {msg ? (
            <Alert variant="secondary" onClose={() => setMsg("")} dismissible>
              <strong>{msg}</strong>
            </Alert>
          ) : null}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Role User</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((items) => {
                return (
                  <DataUser
                    id={items.id}
                    nama={items.nama}
                    email={items.email}
                    roleUser={items.roleUser}
                    createdAt={items.createdAt}
                    msg={setMsg}
                  />
                );
              })}
              <tr>
                <td></td>
                <td>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={roleUser}
                    onChange={(e) => setRoleUser(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={createdAt}
                    onChange={(e) => setCreatedAt(e.target.value)}
                  />
                </td>
                <td className="">
                  <Button
                    variant="primary"
                    size="sm"
                    className="pt-0 m-1"
                    onClick={() => {
                      postData();
                      setMsg("Tambah Data Berhasil");
                      resetForm();
                    }}
                  >
                    <FaPlus />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="pt-0 m-1"
                    onClick={resetForm}
                  >
                    <FaUndo />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
    </section>
  );
}

export default ManageUser;
