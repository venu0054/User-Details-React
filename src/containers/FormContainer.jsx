import React, { Component } from "react";
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";
import Radio from "../components/Radio";

class FormContainer extends Component {
  
  render() {
    return (
      <form className="p-3 mb-2 bg-dark text-white" onSubmit={this.props.onFormSubmit}>
        <Input
          inputtype={"text"}
          title={"Name"}
          name={"name"}
          value={this.props.userSubmissionData.userDetails.name}
          placeholder={"Enter your name"}
          handleChange={ (e) => this.props.onHandleInput(e)}
        />{" "}
        <Input
          inputtype={"number"}
          name={"age"}
          title={"Age"}
          value={this.props.userSubmissionData.userDetails.age}
          placeholder={"Enter your age"}
          handleChange={(e) => this.props.onHandleAge(e)}
        />{" "}        
        <Select
          title={"Gender"}
          name={"gender"}
          options={this.props.userSubmissionData.gender}
          value={this.props.userSubmissionData.userDetails.gender}
          placeholder={"Select Gender"}
          handleChange={(e) => this.props.onHandleInput(e)}
        />{" "}   
          <Select
          title={"Country"}
          name={"country"}
          options={this.props.userSubmissionData.country}
          value={this.props.userSubmissionData.userDetails.country}
          placeholder={"Select Country"}
          handleChange={(e) => this.props.onHandleInput(e)}
        />{" "}  
        <CheckBox
          title={"Hobbies"}
          name={"hobbies"}
          options={this.props.userSubmissionData.hobbies}
          selectedOptions={this.props.userSubmissionData.userDetails.hobbies}
          handleChange={ (e) => this.props.onHandleCheck(e)}
        />{" "}      
        <TextArea
          title={"Address"}
          rows={10}
          value={this.props.userSubmissionData.userDetails.address}
          name={"currentInfo"}
          handleChange={ (e) => this.props.onHandleText(e)}
          placeholder={"Enter the Address"}
        />       
        <Button
          action={this.props.onFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}       
        <Button
          action={this.props.onFormClear}
          type={"secondary"}
          title={"Reset"}
          style={buttonStyle}
        />{" "}       
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
