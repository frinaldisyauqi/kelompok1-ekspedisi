import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaTrashAlt, FaPen, FaCheck } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import axios from "axios";

class DataUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      id: this.props.id,
      nama: this.props.nama,
      email: this.props.email,
      roleUser: this.props.roleUser,
      createdAt: this.props.createdAt,
    };
  }
  editData() {
    this.setState({ isEdit: !this.state.isEdit });
  }

  render() {
    function getDateTimeNow(tanggal) {
        let date_ob = new Date(tanggal);
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        return (
          year +
          "-" +
          month +
          "-" +
          date +
          " " +
          hours +
          ":" +
          minutes +
          ":" +
          seconds
        );
      }
    let tanggal = getDateTimeNow(this.state.createdAt);
    // tanggal = tanggal.toString();
    console.log(tanggal)

    function UserRole(role) {
        if (role===1) {
            return("Manager")
        } else if (role===2) {
            return("Admin")
        } else {
            return("User")
        }
    }
    console.log(UserRole(this.state.roleUser))

    // const deleteData = (id, rev) => {
    //   axios.post(`${API_URL}$`, {
    //     auth: {
    //       username: username,
    //       password: password,
    //     },
    //   });
    // };
    
    // const updateData = () => {
    //   try {
    //     axios.post(
    //       `${API_URL}/$`,
    //       {
    //         _rev: this.props._rev,
    //         nim: this.state.nim,
    //         nama: this.state.nama,
    //         email: this.state.email,
    //         telp: this.state.telp,
    //       },
    //       {
    //         headers: {
    //           "content-type": "application/json",
    //         },
    //         auth: {
    //           username: username,
    //           password: password,
    //         },
    //       }
    //     );
    //   } catch (error) {
    //     if (error.response) {
    //     }
    //   }
    // };

    if (this.state.isEdit) {
      return (
        <tr>
          <td></td>
          <td>
            <Form.Control
              type="text"
              value={this.state.nama}
              onChange={(e) => this.setState({ nama: e.target.value })}
            />
          </td>
          <td>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              value={UserRole(this.state.roleUser)}
              onChange={(e) => this.setState({ roleUser: e.target.value })}
            />
          </td>
          <td>
          {tanggal}
          </td>
          <td className="">
            <Button
              variant="success"
              size="sm"
              className="pt-0 m-1"
              onClick={() => {
                // updateData();
                this.editData();
                this.props.msg("Update Data Berhasil");
              }}
            >
              <FaCheck />
            </Button>
            <Button
              variant="danger"
              size="sm"
              className="pt-0 m-1"
              onClick={() => {
                this.editData();
              }}
            >
              <HiXMark />
            </Button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.nama}</td>
          <td>{this.props.email}</td>
          <td>{UserRole(this.state.roleUser)}</td>
          <td>{tanggal}</td>
          <td>
            <Button
              variant="success"
              size="sm"
              className="pt-0 m-1"
              onClick={() => {
                this.editData();
              }}
            >
              <FaPen />
            </Button>
            <Button
              variant="danger"
              size="sm"
              className="pt-0 m-1"
              onClick={() => {
                // deleteData(this.props._id, this.props._rev);
                this.props.msg("Hapus Data Berhasil");
              }}
            >
              <FaTrashAlt />
            </Button>
          </td>
        </tr>
      );
    }
  }
}

export default DataUser;
