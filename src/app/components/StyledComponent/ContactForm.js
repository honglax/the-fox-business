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
      errors: {}
    };
  }

  componentDidMount() {
    const el = document.getElementById("contact-form");
    if (el.childNodes[0].className.includes("dark-form")) {
      el.style.backgroundColor = "#15181d";
    } else {
      el.style.backgroundColor = "#fff";
    }
  }

  isAllFieldValid = ({ name, errorMsg }) => {
    console.log(name, errorMsg);
    if (errorMsg.length > 0) {
      this.setState({
        errors: {
          name: name,
          errorMsg: errorMsg
        }
      });
    } else {
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
              disabled={!this.state.allFieldValid}
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
