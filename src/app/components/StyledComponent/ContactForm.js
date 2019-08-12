import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BoxSection from "./BoxSection";
import { PrimaryButton } from "./style";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budget: [1000, 2000, 3000, 4000, 5000, 6000]
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    let { boxSectionContent } = this.props;

    return (
      <Container className="contact-form">
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
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Company Name" />
            <div className="select-div">
              <select defaultValue="">
                <option value="" disabled>
                  Your budget
                </option>
                {this.state.budget.map(item => (
                  <option key={this.state.budget.indexOf(item)} value={item}>
                    ${item}
                  </option>
                ))}
              </select>
            </div>
            <PrimaryButton width={"100%"} height={"70px"}>
              <span className="ti-check mr-2" />
              Get Started Now
            </PrimaryButton>
          </form>
          <p className="required-note">All fields are required</p>
        </BoxSection>
      </Container>
    );
  }
}
