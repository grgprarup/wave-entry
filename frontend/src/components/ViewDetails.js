import { fontWeight } from "@mui/system";
import React from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import "../cssfolder/viewDetails.css";
import { getStudent } from "../api/student";

class ViewDetails extends React.Component {
  constructor(props) {
    super();

    this.state = {
      individualUserData: [],
      showIeltsScore: false,
      topMargin: "10%",
    };
  }

  async componentDidMount() {
    console.log(this.props.match.params.id);

    const response = await getStudent(this.props.match.params.id);
    if (response.status === 200) {
      const data = await response.json();
      if (data) {
        this.setState({
          individualUserData: data,
        });
      }

      if (this.state.individualUserData.ielts === "yes") {
        this.setState({
          showIeltsScore: true,
          topMargin: "3%",
        });
      }
    }
  }

  handleGoBack = () => {
    this.props.history.push("/home");
  };

  render() {
    if (localStorage.getItem("token") === null) {
      return <Redirect to="/" />;
    }

    const { individualUserData, topMargin } = this.state;
    return (
      <div className="detail-center-div" style={{ marginTop: topMargin }}>
        <div className="header-div text-center">
          <h1 className="heading">Individual Details</h1>
        </div>
        <div className="container details-div">
          {/* <div class=" info-details "> */}

          <div className="row">
            <div className="col-6 text-center">
              <p>NAME:</p>
            </div>
            <div className="col-6 text-center">
              <p> {individualUserData.name}</p>
            </div>
          </div>

          <div className="row ">
            <div className="col-6 text-center">
              <p>EMAIL:</p>
            </div>
            <div className="col-6 text-center">
              <p> {individualUserData.email}</p>
            </div>
          </div>

          <div className="row ">
            <div className="col-6 text-center">
              <p>ADDRESS:</p>
            </div>
            <div className="col-6 text-center">
              <p> {individualUserData.address}</p>
            </div>
          </div>

          <div className="row ">
            <div className="col-6 text-center">
              <p>PHONE:</p>
            </div>
            <div className="col-6 text-center">
              <p> {individualUserData.phone}</p>
            </div>
          </div>

          <div className="row ">
            <div className="col-6 text-center">
              <p>DESTINATION:</p>
            </div>
            <div className="col-6 text-center">
              <p> {individualUserData.destination}</p>
            </div>
          </div>

          <div className="row ">
            <div className="col-6 text-center">
              <p>QUALIFICATION:</p>
            </div>
            <div className="col-6 text-center">
              <p> {individualUserData.qualification}</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-6 text-center">
              <p>PERCENTAGE/GPA:</p>
            </div>
            <div className="col-6 text-center">
              <p> {individualUserData.percentage}</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-6 text-center">
              <p>IELTS</p>
            </div>
            <div className="col-6 text-center">
              <p> {individualUserData.ielts}</p>
            </div>
          </div>

          {this.state.showIeltsScore && (
            <div className="text-center">
              <p style={{ color: "#0000FF" }}>
                <u>IELTS SCORE:</u>
              </p>
              <div className="row">
                <div className="col-3">
                  <p>
                    <span style={{ color: "#2c2c2c" }}>
                      Listening&nbsp;:&nbsp;
                    </span>
                    {individualUserData.listening}
                  </p>
                </div>
                <div className="col-3">
                  <p>
                    <span style={{ color: "#2c2c2c" }}>
                      Reading&nbsp;:&nbsp;
                    </span>
                    {individualUserData.reading}
                  </p>
                </div>
                <div className="col-3">
                  <p>
                    <span style={{ color: "#2c2c2c" }}>
                      Writing&nbsp;:&nbsp;
                    </span>
                    {individualUserData.writing}
                  </p>
                </div>
                <div className="col-3">
                  <p>
                    <span style={{ color: "#2c2c2c" }}>
                      Speaking&nbsp;:&nbsp;
                    </span>
                    {individualUserData.speaking}
                  </p>
                </div>
              </div>

              <p>
                <span style={{ color: "#00A36C" }}>
                  Overall Band&nbsp;:&nbsp;
                </span>
                {individualUserData.overallband}
              </p>
            </div>
          )}

          <div className="text-center">
            <button className="goBackButton" onClick={this.handleGoBack}>
              Go Back
            </button>
          </div>
        </div>

        {/* </div> */}
      </div>
    );
  }
}

export default ViewDetails;
