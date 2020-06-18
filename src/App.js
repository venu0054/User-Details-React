import React, { Component } from "react";
import "./App.css";
import FormContainer from "./containers/FormContainer";
import NavBar from "./components/navbar";
import UserView from "./containers/UserView";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        name: "",
        age: "",
        gender: "",
        country: "",
        hobbies: [],
        address: "",
      },

      gender: ["Male", "Female", "Others"],
      hobbies: ["Cricket", "ReadingBooks", "Travel"],
      country: ["India", "USA", "UK", "Australia"],
      isDataload: false,
    };
  }

  handleFullName = (e) => {
    let value = e.target.value;
    this.setState(
      (prevState) => ({
        userDetails: {
          ...prevState.userDetails,
          name: value,
        },
      }),
      () => console.log("userDetails:::" + this.state.userDetails)
    );
  };

  handleAgeEvent = (e) => {
    let value = e.target.value;
    this.setState((prevState) => ({
      userDetails: {
        ...prevState.userDetails,
        age: value,
      },
    }));
  };

  handleInputEvent = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState((prevState) => ({
      userDetails: {
        ...prevState.userDetails,
        [name]: value,
      },
    }));
  };

  handleTextAreaEvent = (e) => {
    let value = e.target.value;
    this.setState((prevState) => ({
      userDetails: {
        ...prevState.userDetails,
        address: value,
      },
    }));
  };

  handleCheckBoxEvent = (e) => {
    const newSelection = e.target.value;
    let newitemseletecd;

    if (this.state.userDetails.hobbies.indexOf(newSelection) > -1) {
      newitemseletecd = this.state.userDetails.hobbies.filter(
        (s) => s !== newSelection
      );
    } else {
      newitemseletecd = [...this.state.userDetails.hobbies, newSelection];
    }

    this.setState((prevState) => ({
      userDetails: { ...prevState.userDetails, hobbies: newitemseletecd },
    }));
  };

  handleRadio = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    // this.state.checked = true;

    console.log(name, value, this.state.checked);
    this.setState((prevState) => ({
      userDetails: {
        ...prevState.userDetails,
        gender: name,
        [name]: value,
      },
      // radioChecked: true
    }));
  };

  handleFormSubmitEvent = (e) => {
    if (
      this.state.userDetails.address &&
      this.state.userDetails.age &&
      this.state.userDetails.name &&
      this.state.userDetails.gender &&
      this.state.userDetails.country &&
      this.state.userDetails.hobbies
    ) {
      e.preventDefault();
      this.setState((prevState) => ({
        userDetails: {
          ...prevState.userDetails,
          isDataload: true,
        },
      }));
      let userSubmissionData = this.state.userDetails;
      console.log(userSubmissionData);
    } else {
      alert("please enter all the fields");
    }
    //alert (JSON.stringify(userSubmissionData));
  };

  handleClearFormEvent = (e) => {
    e.preventDefault();
    this.setState({
      userDetails: {
        name: "",
        age: "",
        gender: "",
        country: "",
        hobbies: [],
        address: "",
      },
    });
    this.state.checked = false;
  };

  handleFormback = () => {
    this.setState((prevState) => ({
      userDetails: {
        ...prevState.userDetails,
        isDataload: false,
      },
    }));
  };
  handleFormedit = () => {
    this.setState((prevState) => ({
      userDetails: {
        ...prevState.userDetails,
        isDataload: false,
      },
    }));
  };
  handleFormDelete = () => {
    this.setState({
      userDetails: {
        name: "",
        age: "",
        gender: "",
        country: "",
        hobbies: [],
        address: "",
        isDataload: false,
      },
    });
  };

  render() {
    const buttonStyle = {
      margin: "10px 10px 10px 10px",
    };

    if (!this.state.userDetails.isDataload) {
      return (
        <React.Fragment>
          <NavBar />
          <div className="row justify-content-center innerDiv">
            <div className="col-6">
              <FormContainer
                userSubmissionData={this.state}
                onFormSubmit={this.handleFormSubmitEvent}
                onFormClear={this.handleClearFormEvent}
                onHandleInput={this.handleInputEvent}
                onHandleRadio={this.handleInputEvent}
                onHandleAge={this.handleAgeEvent}
                onHandleCheck={this.handleCheckBoxEvent}
                onHandleText={this.handleTextAreaEvent}
              />
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <div className="row justify-content-center innerDiv">
            <div className="col-6">
              <UserView
                users={this.state.userDetails}
                onHandleEdit={this.handleFormedit}
                onHandleDelete={this.handleFormDelete}
              />
            </div>
          </div>
          <div className="col-12 divstyle">
            <Button
              action={this.handleFormback}
              type={"primary"}
              title={"Back"}
              style={buttonStyle}
            />{" "}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
