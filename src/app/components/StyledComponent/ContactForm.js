import React, { Component } from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import BoxSection from "./BoxSection";
import { PrimaryButton } from "./style";
import FormInput from "./FormInput";

const budget = [1000, 2000, 3000, 4000, 5000, 6000];
export default class ContactForm extends Component {
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
        },
        {
          fieldName: "phoneNumber",
          errorMsg: ""
        }
      ]
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
  };

  componentDidMount() {
    const el = document.getElementById("contact-form");
    if (el.childNodes[0].className.includes("dark-form")) {
      el.style.backgroundColor = "#15181d";
    } else {
      el.style.backgroundColor = "#fff";
    }
  }

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
    let { boxSectionContent, isDarkForm, hasTextArea, btnValue } = this.props;
    let contactClass = classNames(
      "contact-form",
      isDarkForm ? "dark-form" : "light-form"
    );

    return (
      <Container className={contactClass}>
        <BoxSection
          title={boxSectionContent.title}
          description={boxSectionContent.description}
        >
          <form
            className="form-inside-input"
            noValidate
            onSubmit={this.onSubmit}
          >
            {/* Form input */}
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
            <FormInput
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              isRequired={true}
              callBackFromParent={this.isAllFieldValid}
            />
            <FormInput
              name="company"
              type="text"
              placeholder="Company Name"
              isRequire={false}
              callBackFromParent={this.isAllFieldValid}
            />
            <div className="select-div">
              <select defaultValue="">
                <option value="" disabled>
                  Your budget
                </option>
                {budget.map(item => (
                  <option key={budget.indexOf(item)} value={item}>
                    ${item}
                  </option>
                ))}
              </select>
            </div>
            {hasTextArea ? <textarea placeholder="" cols="1" row="30" /> : ""}
            <PrimaryButton
              id="submit-form-btn"
              disabled
              width={"100%"}
              height={"70px"}
            >
              <span className="ti-check mr-2" />
              {btnValue}
            </PrimaryButton>
          </form>
          <p className="required-note">All fields are required</p>
        </BoxSection>
      </Container>
    );
  }
}
