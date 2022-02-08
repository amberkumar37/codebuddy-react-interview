/* eslint-disable react/destructuring-assignment */
import { FormGroup, Label, Input } from 'reactstrap';

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <p>What should we call you?</p>
      <FormGroup>
        <Label for="firstName">FirstName</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your Username"
          value={props.firstName} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">LastName</Label>
        <Input
          type="text"
          name="lastName"
          id=""
          placeholder="Enter your Username"
          value={props.lastName} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="username">Address</Label>
        <Input
          type="text"
          name="address"
          id="address"
          placeholder="Enter your Username"
          value={props.address} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step2;
