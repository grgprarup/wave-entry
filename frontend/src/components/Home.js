import React, { useReducer, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../cssfolder/home.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import HomeLogo from "../images/homelogowaves.png";
import { FiAlignJustify } from "react-icons/fi";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { color } from "@mui/system";
import { time } from "faker";
import ReactModal from "react-modal";
import { getStudents, deleteStudent } from "../api/student";

const Loading = () => (
  <div className="loading">
    <div></div>
    <div></div>
  </div>
);

class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.location.state.detail)

    this.state = {
      allUser: [],
      DataisLoaded: false,
      page: 0,
      rowsPerPage: 7,
      homeLoading: true,
      showModalSuccessfull: false,
      deleteMessage: "",
    };
  }

  async componentDidMount() {
    // this.getPlayerData();

    console.log(sessionStorage.getItem("currentUsername"));
    this.isLoading = setTimeout(() => {
      this.setState({ homeLoading: false });
    }, 1000);

    const response = await getStudents();
    if (response.status === 200) {
      const data = await response.json();
      if (data) {
        this.setState({
          allUser: data,
          DataisLoaded: true,
          search: "",
        });
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.isLoading);
  }

  timer = () =>
    setTimeout(() => {
      this.setState({ homeLoading: false });
    }, 500);

  handleAdminUpdate = () => {
    this.props.history.push({
      pathname: "/setting",
    });
  };

  handleLogout = (e) => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("currentUsername");
    this.props.history.push("/");
  };

  handleRegister = (e) => {
    this.props.history.push("/register");
  };
  handleCloseModal = () => {
    this.setState({
      showModalSuccessfull: false,
    });
  };

  handleOkButton = () => {
    this.props.history.push("/");
  };

  handleDelete = async (user_id) => {
    // window.alert(user_id + "data has been deleted from database!!")

    try {
      const res = await deleteStudent(user_id);
      if (res.status === 200) {
        this.setState({
          deleteMessage: "User Delete Successfull !!",
          showModalSuccessfull: true,
        });
      } else {
        this.setState({
          showModalSuccessfull: true,
          deleteMessage: "Problem occured during delete !!!",
        });
      }
    } catch (error) {
      this.setState({
        showModalSuccessfull: true,
        deleteMessage: "Problem occured during delete !!!",
      });
    }
  };

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: [event.target.value],
      page: 0,
    });
    // setRowsPerPage(+event.target.value);
    // setPage(0);
  };

  render() {
    if (localStorage.getItem("token") === null) {
      return <Redirect to="/" />;
    }

    const { allUser, page, rowsPerPage, search, homeLoading } = this.state;
    var i = 1;

    // console.log(this.props.location.state.detail)

    return (
      // <div className = "container">

      // </div>
      homeLoading ? (
        <Loading />
      ) : (
        <div className="main">
          <p className="resolutionHomeError"></p>

          <div className="container center-div">
            {/* <div className = "settingSearch text-center">
                  <input type = "text" placeholder = "Search..." onChange ={(e) => { this.setState({search: e.target.value})}}></input>
                  <button className = "registerButton" onClick = {this.handleRegister}>Registration</button>
                </div> */}

            {/* top section */}

            <div className="container" style={{ backgroundColor: "  " }}>
              <div class="row">
                <div class="col-6">
                  <img className="homeLogo" src={HomeLogo}></img>
                </div>
                <div class="col-3">
                  <input
                    className="searchInput"
                    type="text"
                    placeholder="Search By name....."
                    onChange={(e) => {
                      this.setState({ search: e.target.value });
                    }}
                  />
                </div>
                <div class="col-2">
                  <button
                    className="registerButton"
                    onClick={this.handleRegister}
                  >
                    {" "}
                    Add Student
                  </button>
                </div>
                <div class="col-1">
                  <Menu
                    menuButton={({ open }) => (
                      <button className="menuButton">
                        {open ? (
                          <i className="fa fa-close" />
                        ) : (
                          <i className="fa fa-bars" />
                        )}{" "}
                      </button>
                    )}
                    transition
                    menuStyles={{
                      backgroundColor: "#2c2c2c",
                      color: "white",
                    }}
                  >
                    <MenuItem
                      onClick={this.handleAdminUpdate}
                      styles={{
                        hover: {
                          color: "#2c2c2c",
                          backgroundColor: "white",
                        },
                      }}
                    >
                      Change Credential{" "}
                    </MenuItem>
                    <MenuItem
                      styles={{
                        hover: {
                          color: "#2c2c2c",
                          backgroundColor: "white",
                        },
                      }}
                      onClick={this.handleLogout}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </div>

            <div className="wholeTable">
              <TableContainer
                style={{ height: 480, width: "96%", marginTop: 28 }}
              >
                <Table>
                  <TableHead>
                    <TableRow className="tableHeading">
                      <TableCell
                        style={{
                          padding: "12px",
                          color: "white",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      >
                        S.N.
                      </TableCell>
                      <TableCell
                        style={{
                          padding: "12px",
                          color: "white",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      >
                        NAME
                      </TableCell>
                      <TableCell
                        style={{
                          padding: "12px",
                          color: "white",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      >
                        EMAIL
                      </TableCell>
                      <TableCell
                        style={{
                          padding: "12px",
                          color: "white",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      >
                        ADDRESS
                      </TableCell>
                      <TableCell
                        style={{
                          padding: "12px",
                          color: "white",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      >
                        PHONE
                      </TableCell>
                      <TableCell
                        style={{
                          padding: "12px",
                          color: "white",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      ></TableCell>
                      <TableCell
                        style={{
                          padding: "12px",
                          color: "white",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      ></TableCell>
                      <TableCell
                        style={{
                          padding: "12px",
                          color: "white",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allUser
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .filter((val) => {
                        if (search === "") {
                          return val;
                        } else if (
                          val.name.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((user) => (
                        <TableRow key={user.id}>
                          <TableCell
                            style={{ padding: "20px", fontSize: "13px" }}
                          >
                            {i++}
                          </TableCell>
                          <TableCell
                            style={{ padding: "20px", fontSize: "13px" }}
                          >
                            {user.name}
                          </TableCell>
                          <TableCell
                            style={{ padding: "20px", fontSize: "13px" }}
                          >
                            {user.email}
                          </TableCell>
                          <TableCell
                            style={{ padding: "20px", fontSize: "13px" }}
                          >
                            {user.address}
                          </TableCell>
                          <TableCell
                            style={{ padding: "20px", fontSize: "13px" }}
                          >
                            {user.phone}
                          </TableCell>
                          <TableCell>
                            <Link
                              className="details"
                              to={`/viewdetails/${user._id}`}
                            >
                              Details
                            </Link>
                          </TableCell>
                          <TableCell>
                            <Link className="edit" to={`/update/${user._id}`}>
                              Edit
                            </Link>
                          </TableCell>
                          <TableCell>
                            <Link
                              className="delete"
                              to={`/home`}
                              onClick={() => this.handleDelete(user._id)}
                            >
                              Delete
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            {/* pagination section */}

            <div className="pagination">
              <div>
                <TablePagination
                  rowsPerPageOptions={[7, 12, 15]}
                  component="div"
                  count={allUser.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={this.handleChangePage}
                  onRowsPerPageChange={this.handleChangeRowsPerPage}
                />
              </div>
            </div>
          </div>
          {
            /* modal dialog */

            <ReactModal
              isOpen={this.state.showModalSuccessfull}
              contentLabel="Minimal Modal Example"
              className="Modal"
              overlayClassName="Overlay"
              // onRequestClose={this.handleCloseModal}
            >
              <div className="modaldiv text-center">
                <p>{this.state.deleteMessage}</p>
                <button className="okButton" onClick={this.handleOkButton}>
                  OK
                </button>
              </div>
            </ReactModal>
          }
        </div>
      )
    );
  }
}

export default Home;
