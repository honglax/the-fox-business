import React, { Component } from "react";
import FormInput from "../StyledComponent/FormInput";

import { PrimaryButton } from "../StyledComponent/style";

export default class NewsLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [
        {
          fieldName: "name",
          errorMsg: ""
        },
        {
          fieldName: "email",
          errorMsg: ""
        }
      ]
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
  };

  componentDidUpdate() {
    document.getElementById("submit-form-btn").disabled =
      this.state.errors.length > 0;
  }

  isAllFieldValid = ({ fieldName, errorMsg }) => {
    if (errorMsg.length > 0) {
      let count = 0;
      let newErrors = this.state.errors.map(error => {
        if (error.fieldName === fieldName) {
          error.errorMsg = errorMsg;
          count++;
        }
        return error;
      });
      if (count === 0) {
        newErrors = newErrors.concat({
          fieldName: fieldName,
          errorMsg: errorMsg
        });
      }
      this.setState({
        errors: newErrors
      });
    } else {
      this.setState({
        errors: this.state.errors.filter(error => error.fieldName !== fieldName)
      });
    }
  };

  render() {
    return (
      <div>
        <form className="form-inside-input" noValidate onSubmit={this.onSubmit}>
          <FormInput
            name="name"
            type="text"
            placeholder="Name"
            isRequired={true}
            callBackFromParent={this.isAllFieldValid}
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            isRequired={true}
            callBackFromParent={this.isAllFieldValid}
          />
          <PrimaryButton
            id="submit-form-btn"
            disabled
            width={"100%"}
            height={"55px"}
          >
            Submit Now
          </PrimaryButton>
        </form>
        <p className="required-note">All fields are required</p>
      </div>
    );
  }
}
