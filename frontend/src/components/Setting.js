import React, { Component } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "../cssfolder/setting.css";
import ReactModal from "react-modal";
import SadEmoji from "../images/sad.png";
import { updateProfile } from "../api/admin";

class Setting extends Component {
  constructor() {
    super();

    this.state = {
      user_id: "",
      newUsername: "",
      newPassword: "",
      confirmPassword: "",
      settingErrorMessage: "",
      showModal: false,
      showModalSuccessfull: false,
    };
    this.HEROKUURL = "https://wave-entry-server.herokuapp.com";
    this.HOMEURL = "http://localhost:5000/";
  }

  componentDidMount() {
    // console.log(this.props.location.state.detail)
    this.setState({
      newUsername: sessionStorage.getItem("currentUsername"),
    });
  }

  handleCancel = () => {
    this.props.history.push("/home");
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleOkButton = () => {
    this.props.history.push("/home");
  };

  changeSetting = async (e) => {
    // change setting button handler
    e.preventDefault();

    const { user_id, newUsername, newPassword, confirmPassword } = this.state;

    // validation starts here

    if (newUsername === "" || newPassword === "" || confirmPassword === "") {
      this.setState({
        showModal: true,
        settingErrorMessage: "Fileds cannot be left empty !!",
      });
    } else if (user_id.length > 4) {
      this.setState({
        showModal: true,
        settingErrorMessage: "Invalid User ID !!",
      });
    } else if (newPassword !== confirmPassword) {
      this.setState({
        showModal: true,
        settingErrorMessage: "Password did not match !!",
      });
    } else {
      const res = await updateProfile(newUsername, newPassword);

      const data = await res.json();

      if (res.status !== 200) {
        this.setState({
          showModal: true,
          settingErrorMessage: JSON.stringify(data.error),
        });
      } else {
        this.setState({
          showModalSuccessfull: true,
          settingErrorMessage: "Credentials updated",
        });
        localStorage.removeItem("token");
      }
    }

    // const res = await fetch("/changesetting",{
    //     method:"POST",
    //     headers:{
    //       'Content-Type' : 'application/json'
    //     },
    //     body:JSON.stringify({

    //         user_id:user_id,
    //         newUsername:newUsername,
    //         newPassword:newPassword

    //     })
    //   })

    //   const data = await res.json();

    //   if(!data){
    //     window.alert("Registration Failed!!!");

    //   }else{
    //     window.alert(JSON.stringify(data.response));
    //     this.props.history.push("/home");

    //   }
  };

  render() {
    if (localStorage.getItem("token") === null) {
      return <Redirect to="/" />;
    }

    return (
      <div className="setting-main-div">
        <div className="setting-info-div">
          <div className="setting-heading-div text-center">
            <h2 className="setting-heading">Change Your Credential</h2>
          </div>
          <form onSubmit={(event) => this.changeSetting()}>
            <div className="info-div">
              <lable style={{ fontSize: "14px" }}>
                User ID: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <input
                type="text"
                name="user_id"
                value={this.state.user_id}
                onChange={(event) =>
                  this.setState({ user_id: event.target.value })
                }
                placeholder="user id"
                className="setting-input"
              />
            </div>

            <div className="info-div">
              <lable style={{ fontSize: "14px" }}>
                Username: <span style={{ color: "red" }}></span>
              </lable>{" "}
              <br></br>
              <input
                type="text"
                name="newusername"
                value={this.state.newUsername}
                onChange={(event) =>
                  this.setState({ newUsername: event.target.value })
                }
                placeholder="new username"
                className="setting-input"
              />
            </div>

            <div className="info-div">
              <lable style={{ fontSize: "14px" }}>
                New Password: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <input
                type="password"
                name="newpassword"
                value={this.state.newPassword}
                onChange={(event) =>
                  this.setState({ newPassword: event.target.value })
                }
                placeholder="new password"
                className="setting-input"
              />
            </div>

            <div className="info-div">
              <lable style={{ fontSize: "14px" }}>
                Confirm New Password: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <input
                type="password"
                name="confirmpassword"
                value={this.state.confirmPassword}
                onChange={(event) =>
                  this.setState({ confirmPassword: event.target.value })
                }
                placeholder="confirm password"
                className="setting-input"
              />
            </div>

            <div className="settingButtonDiv">
              <div className="row">
                <div className="col-6">
                  <button
                    className="backSetting"
                    onClick={() => this.handleCancel()}
                  >
                    Back
                  </button>
                </div>

                <div className="col-6">
                  <input
                    className="changeSetting"
                    type="submit"
                    value="Change"
                    onClick={(e) => this.changeSetting(e)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {
          /* modal dialog */

          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            className="Modal"
            overlayClassName="Overlay"
            onRequestClose={this.handleCloseModal}
          >
            <div className="modaldiv text-center">
              <p>{this.state.settingErrorMessage}</p>
              <img className="sademoji" src={SadEmoji}></img>
            </div>
          </ReactModal>
        }

        {
          /* modal dialog */

          <ReactModal
            isOpen={this.state.showModalSuccessfull}
            contentLabel="Minimal Modal Example"
            className="Modal"
            overlayClassName="Overlay"
            onRequestClose={this.handleCloseModal}
          >
            <div className="modaldiv text-center">
              <p>{this.state.settingErrorMessage}</p>
              <button className="okButton" onClick={this.handleOkButton}>
                OK
              </button>
            </div>
          </ReactModal>
        }
      </div>
    );
  }
}

export default Setting;
