import React from "react";
import { Redirect } from "react-router-dom";
import Select from "react-select";
import "../cssfolder/register.css";
import ReactModal from "react-modal";
import SadEmoji from "../images/sad.png";
import { registerStudent } from "../api/student";

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
class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        showOption: false,
        margin: 150,
      });
    }
  };

  //required function

  handleCancel = (e) => {
    this.props.history.push(`/home`);
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleOkButton = () => {
    this.props.history.push(`/home`);
  };

  handleDataEntry = async () => {
    const ielts = this.state.ielts.value;
    const destination = this.state.destination.value;
    const qualification = this.state.qualification.value;

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
    // email regular expression

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
        const res = await registerStudent(formData);

        const data = await res.json();
        if (res.status !== 201) {
          this.setState({
            showModal: true,
            registrationErrorMessage: "User Already Exist Cannot Register!!",
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
        const res = await registerStudent(formData);

        const data = await res.json();
        if (res.status !== 201) {
          this.setState({
            showModal: true,
            registrationErrorMessage: "User Already Exist Cannot Register!!",
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
          <h2 className="register-heading">Register New Student</h2>
        </div>
        <div className="student-info-div">
          <div className="d-flex">
            <div className="cell" style={{}}>
              <lable style={{ fontSize: "14px" }}>
                Name: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <input
                className="name-input"
                type="text"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                placeholder=""
              />
            </div>

            <div className="cell">
              <lable style={{ fontSize: "14px" }}>
                Email: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <input
                className="email-input"
                type="text"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                placeholder=""
              />
            </div>
          </div>

          <div className="d-flex" style={{ marginTop: "20px" }}>
            <div className="cell" style={{}}>
              <lable style={{ fontSize: "14px" }}>
                Address: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <input
                className="address-input"
                type="text"
                onChange={(e) => {
                  this.setState({ address: e.target.value });
                }}
                placeholder=""
              />
            </div>

            <div className="cell">
              <lable style={{ fontSize: "14px" }}>
                Phone:
                <span style={{ color: "red", textIndent: "2em" }}>*</span>
              </lable>
              <br></br>
              <input
                className="phone-input"
                type="number"
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
                placeholder=""
              />
            </div>
          </div>

          <div className="d-flex" style={{ marginTop: "20px" }}>
            <div className="cell" style={{}}>
              <lable style={{ fontSize: "14px" }}>
                Qualification: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <Select
                className="qualification-select"
                value={this.state.qualification}
                placeholder="+2"
                onChange={this.handleQualificationChange}
                options={qualificationOptions}
                isSearchable={false}
                styles={customStyles}
              />
            </div>

            <div className="cell">
              <lable style={{ fontSize: "14px" }}>
                Percentage / GPA:
                <span style={{ color: "red", textIndent: "2em" }}>*</span>
              </lable>
              <br></br>
              <input
                className="percentage-input"
                type="number"
                onChange={(e) => {
                  this.setState({ percentage: e.target.value });
                }}
                placeholder=""
              />
            </div>
          </div>

          <div className="d-flex" style={{ marginTop: "20px" }}>
            <div className="cell" style={{}}>
              <lable style={{ fontSize: "14px" }}>
                Destination: <span style={{ color: "red" }}>*</span>
              </lable>{" "}
              <br></br>
              <Select
                className="destination-select"
                value={this.state.destination}
                isSearchable={false}
                placeholder="australia"
                onChange={this.handleDestinationChange}
                options={destinationOptions}
                styles={customStyles}
              />
            </div>

            <div className="cell">
              <lable style={{ fontSize: "14px" }}>
                IELTS:
                <span style={{ color: "red", textIndent: "2em" }}>*</span>
              </lable>
              <br></br>
              <Select
                className="ielts-select"
                value={this.state.ielts}
                placeholder="no"
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
              <p style={{ fontSize: "16px" }}>Please enter your ielts score</p>

              <div className="row">
                <div className="col-3">
                  <lable style={{ fontSize: "12px" }}>
                    Listening <span style={{ color: "red" }}>*</span>
                  </lable>
                  <br></br>
                  <input
                    className="listening-input"
                    type="number"
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
                    className="reading-input"
                    type="number"
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
                    className="writing-input"
                    type="number"
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
                    className="speaking-input"
                    type="number"
                    onChange={(e) => {
                      this.setState({ speaking: e.target.value });
                    }}
                  ></input>
                  <br></br>
                </div>
              </div>

              <div className="row m-4">
                <div className="col-12">
                  <lable style={{ fontSize: "14px" }}>
                    Overall Band <span style={{ color: "red" }}>*</span>
                  </lable>
                  <br></br>
                  <input
                    className="overallband-input"
                    type="number"
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
          <div className="d-flex">
            <div className="cell">
              <button
                className="cancelButton"
                onClick={() => this.handleCancel()}
              >
                Cancel
              </button>
            </div>

            <div className="cell">
              <button
                className="register-Button"
                onClick={this.handleDataEntry}
              >
                Register
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

export default Register;
