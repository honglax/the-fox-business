import React, { Component } from "react";
import classNames from "classnames";

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: "",
      value: ""
    };
  }

  validatePhone = inputNumber => {
    if (inputNumber.trim() === "") {
      return "Phone Number is required.";
    } else {
      const regexp = /^\d{10,11}$/;
      const checkingResult = regexp.exec(inputNumber);
      return checkingResult === null
        ? "Phone Number must have from 10 to 11 digits."
        : "";
    }
  };

  validateName = inputName => {
    return inputName.trim() === "" ? "Name is required." : "";
  };

  validateEmail = inputEmail => {
    if (inputEmail.trim() === "") {
      return "Email is required.";
    } else {
      // Get this regexp from https://emailregex.com
      // eslint-disable-next-line
      const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const checkingResult = regexp.exec(inputEmail);
      return checkingResult === null ? "Wrong format of email." : "";
    }
  };

  handleInput = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleInputValidation = e => {
    let errorMsg;
    switch (e.target.name) {
      case "phoneNumber":
        errorMsg = this.validatePhone(this.state.value);
        break;
      case "name":
        errorMsg = this.validateName(this.state.value);
        break;
      case "email":
        errorMsg = this.validateEmail(this.state.value);
        break;
      default:
        break;
    }
    this.setState({
      errorMsg: errorMsg
    });
    this.props.callBackFromParent({
      fieldName: e.target.name,
      errorMsg: errorMsg
    });
  };

  render() {
    let { name, type, placeholder, isRequired } = this.props;
    let inputClass = classNames({
      error: this.state.errorMsg.length > 0
    });
    return (
      <div className="input-group">
        <input
          className={inputClass}
          name={name}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          onChange={this.handleInput}
          onBlur={isRequired ? this.handleInputValidation : () => {}}
        />
        {this.state.errorMsg.length > 0 ? (
          <span className="error-msg">{this.state.errorMsg}</span>
        ) : (
          ""
        )}
      </div>
    );
  }
}
