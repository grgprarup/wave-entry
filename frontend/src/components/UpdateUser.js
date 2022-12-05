import userEvent from "@testing-library/user-event";
import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import ReactModal from "react-modal";
import SadEmoji from "../images/sad.png";
import { updateStudent, getStudent } from "../api/student";

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
    padding: 2,
  }),
};

const ieltsOptions = [
  { value: "no", label: "no" },
  { value: "yes", label: "yes" },
];

const destinationOptions = [
  { value: "australia", label: "australia" },
  { value: "usa", label: "usa" },
  { value: "canada", label: "canada" },
  { value: "japan", label: "japan" },
];

const qualificationOptions = [
  { value: "+2", label: "+2" },
  { value: "bachelors", label: "bachelors" },
  { value: "masters", label: "masters" },
];
class UpdateUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editDetails: [],
      ielts: { value: "no", label: "no" },
      destination: { value: "australia", label: "australia" },
      qualification: { value: "+2", label: "+2" },
      showOption: false,
      name: "",
      address: "",
      phone: "",
      email: "",
      percentage: "",
      listening: "",
      reading: "",
      writing: "",
      speaking: "",
      overallband: "",
      prevIelts: "",
      prevDestination: "",
      prevQualification: "",
      margin: 150,
      registrationErrorMessage: "",
      showModal: false,
      showModalSuccessfull: false,
    };
  }

  handleDestinationChange = (destination) => {
    this.setState({ destination });
  };

  handleQualificationChange = (qualification) => {
    this.setState({ qualification });
  };

  handleIeltsChange = (ielts) => {
    this.setState({ ielts });

    if (ielts.value === "yes") {
      this.setState({
        showOption: true,
        margin: 25,
      });
    } else {
      this.setState({
        margin: 150,
        showOption: false,
        listening: "",
        reading: "",
        speaking: "",
        writing: "",
        overallband: "",
      });
    }
  };

  //required function

  handleCancel = (e) => {
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

  handleDataEntry = async () => {
    // this.props.history.push("/home");
    // e.preventDefault();

    //   when something change in the react select then it stores json array with value and label so we have to select value only not the json array string

    var ielts, destination, qualification;

    // console.log(this.state.ielts.value);

    if (this.state.ielts !== this.state.prevIelts) {
      ielts = this.state.ielts.value;
    } else {
      ielts = this.state.prevIelts;
    }
    if (this.state.destination !== this.state.prevDestination) {
      destination = this.state.destination.value;
    } else {
      destination = this.state.prevDestination;
    }

    if (this.state.qualification !== this.state.prevQualification) {
      qualification = this.state.qualification.value;
    } else {
      qualification = this.state.prevQualification;
    }

    console.log(ielts + destination + qualification);
    const {
      name,
      address,
      phone,
      email,
      percentage,
      listening,
      reading,
      writing,
      speaking,
      overallband,
    } = this.state;

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (ielts === "no") {
      if (name === "" || address === "" || email === "" || percentage === "") {
        this.setState({
          showModal: true,
          registrationErrorMessage: "Fileds cannot be left empty !!",
        });
      } else if (!email.match(mailformat)) {
        this.setState({
          showModal: true,
          registrationErrorMessage: "Invalid Email Format!!",
        });
      } else if (phone.length > 10) {
        this.setState({
          showModal: true,
          registrationErrorMessage: "Invalid Mobile Number!!",
        });
      } else if (percentage > 100) {
        this.setState({
          showModal: true,
          registrationErrorMessage: "Invalid Percentage!!",
        });
      } else {
        const formData = {
          name,
          email,
          phone,
          destination,
          qualification,
          address,
          percentage,
          ielts,
          listening,
          reading,
          writing,
          speaking,
          overallband,
        };

        const res = await updateStudent(this.props.match.params.id, formData);

        const data = await res.json();
        if (res.status !== 200) {
          this.setState({
            showModal: true,
            registrationErrorMessage: "Something Went Wrong During Update!!",
          });
        } else {
          this.setState({
            showModalSuccessfull: true,
            registrationErrorMessage: JSON.stringify(data.message),
          });
        }
      }
    } else if (ielts === "yes") {
      // if(name === "" || address === "" || email ==="" || percentage === "" || listening ==="" || reading ==="" || speaking ==="" || writing ==="" || overallband ===""){
      if (
        name === "" ||
        address === "" ||
        email === "" ||
        percentage === "" ||
        listening === "" ||
        reading === "" ||
        speaking === "" ||
        writing === "" ||
        overallband === ""
      ) {
        this.setState({
          showModal: true,
          registrationErrorMessage: "Fileds cannot be left emptyee !!",
        });
      } else if (!email.match(mailformat)) {
        this.setState({
          showModal: true,
          registrationErrorMessage: "Invalid Email Format!!",
        });
      } else if (phone.length > 10) {
        this.setState({
          showModal: true,
          registrationErrorMessage: "Invalid Mobile Number!!",
        });
      } else if (
        speaking > 9 ||
        reading > 9 ||
        writing > 9 ||
        listening > 9 ||
        overallband > 9
      ) {
        this.setState({
          showModal: true,
          registrationErrorMessage: "Invalid band Number!!",
        });
      } else if (percentage > 100) {
        this.setState({
          showModal: true,
          registrationErrorMessage: "Invalid Percentage!!",
        });
      } else {
        const formData = {
          name,
          email,
          phone,
          destination,
          qualification,
          address,
          percentage,
          ielts,
          listening,
          reading,
          writing,
          speaking,
          overallband,
        };
        const res = await updateStudent(this.props.match.params.id, formData);

        const data = await res.json();
        if (res.status !== 200) {
          this.setState({
            showModal: true,
            registrationErrorMessage: "Something Went Wrong During Update!!",
          });
        } else {
          this.setState({
            showModalSuccessfull: true,
            registrationErrorMessage: JSON.stringify(data.message),
          });
        }
      }
    }
  };

  async componentDidMount() {
    // console.log(this.props.match.params.id)

    const response = await getStudent(this.props.match.params.id);
    if (response.status === 200) {
      const data = await response.json();
      if (data) {
        this.setState({
          editDetails: data,
        });
      }
      // console.log(UpdateUser)
    }
    console.log(this.state.editDetails.ielts);

    if (this.state.editDetails.ielts === "yes") {
      this.setState({
        showOption: true,
        margin: 25,
      });
    }

    this.setState({
      name: this.state.editDetails.name,
      email: this.state.editDetails.email,
      phone: this.state.editDetails.phone,
      destination: this.state.editDetails.destination,
      prevDestination: this.state.editDetails.destination,
      qualification: this.state.editDetails.qualification,
      prevQualification: this.state.editDetails.qualification,
      address: this.state.editDetails.address,
      percentage: this.state.editDetails.percentage,
      ielts: this.state.editDetails.ielts,
      prevIelts: this.state.editDetails.ielts,
      listening: this.state.editDetails.listening,
      reading: this.state.editDetails.reading,
      writing: this.state.editDetails.writing,
      speaking: this.state.editDetails.speaking,
      overallband: this.state.editDetails.overallband,
    });
  }

  render() {
    if (localStorage.getItem("token") === null) {
      return <Redirect to="/" />;
    }

    return (
      <div
        className="main-register-div"
        style={{ marginTop: this.state.margin }}
      >
        <div className="register-heading-div text-center">
          <h2 className="register-heading">Update Student Details</h2>
        </div>
        <div className="student-info-div">
          <div className="row">
            <div className="col-6" style={{}}>
              <lable style={{ fontSize: "14px" }}>
                Name: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <input
                value={this.state.name}
                className="name-input"
                type="text"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                placeholder=""
              />
            </div>

            <div className="col-6">
              <lable style={{ fontSize: "14px" }}>
                Email: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <input
                value={this.state.email}
                className="name-input"
                type="text"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                placeholder=""
              />
            </div>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-6" style={{}}>
              <lable style={{ fontSize: "14px" }}>
                Address: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <input
                value={this.state.address}
                className="name-input"
                type="text"
                onChange={(e) => {
                  this.setState({ address: e.target.value });
                }}
                placeholder=""
              />
            </div>

            <div className="col-6">
              <lable style={{ fontSize: "14px" }}>
                Phone:
                <span style={{ color: "red", textIndent: "2em" }}>*</span>
              </lable>
              <br></br>
              <input
                value={this.state.phone}
                className="name-input"
                type="text"
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
                placeholder=""
              />
            </div>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-6" style={{}}>
              <lable style={{ fontSize: "14px" }}>
                Qualification: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <Select
                value={this.state.qualification}
                placeholder={this.state.editDetails.qualification}
                onChange={this.handleQualificationChange}
                options={qualificationOptions}
                isSearchable={false}
                styles={customStyles}
              />
            </div>

            <div className="col-6">
              <lable style={{ fontSize: "14px" }}>
                Percentage / GPA:
                <span style={{ color: "red", textIndent: "2em" }}>*</span>
              </lable>
              <br></br>
              <input
                value={this.state.percentage}
                className="name-input"
                type="text"
                onChange={(e) => {
                  this.setState({ percentage: e.target.value });
                }}
                placeholder=""
              />
            </div>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-6" style={{}}>
              <lable style={{ fontSize: "14px" }}>
                Destination: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <Select
                value={this.state.destination}
                isSearchable={false}
                placeholder={this.state.editDetails.destination}
                onChange={this.handleDestinationChange}
                options={destinationOptions}
                styles={customStyles}
              />
            </div>

            <div className="col-6">
              <lable style={{ fontSize: "14px" }}>
                IELTS:
                <span style={{ color: "red", textIndent: "2em" }}>*</span>
              </lable>
              <br></br>
              <Select
                value={this.state.ielts}
                placeholder={this.state.editDetails.ielts}
                onChange={this.handleIeltsChange}
                options={ieltsOptions}
                isSearchable={false}
                styles={customStyles}
              />
            </div>
          </div>
        </div>

        <div className="ielts-score-div">
          {this.state.showOption && (
            <div className="ielts-input-div">
              <p style={{ fontSize: "18px", color: "green" }}>
                <u>Your Ielts Score</u>
              </p>

              <div className="row">
                <div className="col-3">
                  <lable style={{ fontSize: "12px" }}>
                    Listening <span style={{ color: "red" }}>*</span>
                  </lable>
                  <br></br>
                  <input
                    value={this.state.listening}
                    className="listening-input"
                    type="text"
                    onChange={(e) => {
                      this.setState({ listening: e.target.value });
                    }}
                  ></input>
                  <br></br>
                </div>
                <div className="col-3">
                  <lable style={{ fontSize: "12px" }}>
                    Reading <span style={{ color: "red" }}>*</span>
                  </lable>
                  <br></br>
                  <input
                    value={this.state.reading}
                    className="reading-input"
                    type="text"
                    onChange={(e) => {
                      this.setState({ reading: e.target.value });
                    }}
                  ></input>
                  <br></br>
                </div>
                <div className="col-3">
                  <lable style={{ fontSize: "12px" }}>
                    Writing <span style={{ color: "red" }}>*</span>
                  </lable>
                  <br></br>
                  <input
                    value={this.state.writing}
                    className="writing-input"
                    type="text"
                    onChange={(e) => {
                      this.setState({ writing: e.target.value });
                    }}
                  ></input>
                  <br></br>
                </div>
                <div className="col-3">
                  <lable style={{ fontSize: "12px" }}>
                    Speaking <span style={{ color: "red" }}>*</span>
                  </lable>
                  <br></br>
                  <input
                    value={this.state.speaking}
                    className="speaking-input"
                    type="text"
                    onChange={(e) => {
                      this.setState({ speaking: e.target.value });
                    }}
                  ></input>
                  <br></br>
                </div>
              </div>

              <div className="row m-4">
                <div className="col-12">
                  <lable style={{ fontSize: "12px" }}>
                    Overall Band <span style={{ color: "red" }}>*</span>
                  </lable>
                  <br></br>
                  <input
                    value={this.state.overallband}
                    className="overallband-input"
                    type="text"
                    onChange={(e) => {
                      this.setState({ overallband: e.target.value });
                    }}
                  ></input>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="button-div">
          <div className="row">
            <div className="col-6">
              <button
                className="cancelButton"
                onClick={() => this.handleCancel()}
              >
                Cancel
              </button>
            </div>

            <div className="col-6">
              <button
                className="register-Button"
                onClick={this.handleDataEntry}
              >
                Update
              </button>
            </div>
          </div>
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
              <p>{this.state.registrationErrorMessage}</p>
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
              <p>{this.state.registrationErrorMessage}</p>
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

export default UpdateUser;
