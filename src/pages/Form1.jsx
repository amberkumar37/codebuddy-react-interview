/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from 'reactstrap';

import styled from 'styled-components';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import MultiStepProgressBar from './MultiStepProgressBar';

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      password: '',
      countryCode: '+91',
      phoneNumber: '0000000000',
      acceptTermsAndCondition: false,
    };
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Trigger an alert on form submission
  handleSubmit = async event => {
    event.preventDefault();
    const { email, firstName, lastName, address, password, countryCode, phoneNumber } = this.state;
    await fetch('https://codebuddy.review/submit', {
      method: 'POST',
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        address,
        password,
        countryCode,
        phoneNumber,
      }),
    }).then(res => this.props?.history.push('/posts'));

    // alert(`Your registration detail: \n
    //   Email: ${email} \n
    //   Username: ${username} \n
    //   Password: ${password}`);
  };

  // The "next" and "previous" button functions
  get previousButton() {
    const { currentStep } = this.state;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={this._prev}>
          Previous
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    const { currentStep } = this.state;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <Button color="primary float-right" onClick={this._next}>
          Save & Next
        </Button>
      );
    }

    // ...else render nothing
    return null;
  }

  get submitButton() {
    const { currentStep } = this.state;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return <Button color="primary float-right">Submit</Button>;
    }

    // ...else render nothing
    return null;
  }

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let { currentStep } = this.state;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep,
    });
  }

  _prev() {
    let { currentStep } = this.state;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep,
    });
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <CardHeader>Create an Account</CardHeader>
            <CardBody>
              <CardTitle>
                <MultiStepProgressBar currentStep={this.state.currentStep} />
              </CardTitle>
              <CardText />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
                password={this.state.password}
                handlePssChange={this.handleChange}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                firstName={this.state.firstName}
                LastName={this.state.lastName}
                address={this.state.address}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.password}
                countryCode={this.state.countryCode}
                phoneNumber={this.state.phoneNumber}
                acceptTermsAndCondition={this.state.acceptTermsAndCondition}
              />
            </CardBody>
            <CardFooter>
              {this.previousButton}
              {this.nextButton}
              {this.submitButton}
            </CardFooter>
          </Card>
        </Form>
      </>
    );
  }
}

export default MasterForm;
