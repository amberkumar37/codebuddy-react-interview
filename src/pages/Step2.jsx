/* eslint-disable react/destructuring-assignment */
import { FormGroup, Label, Input } from 'reactstrap';

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <span style={{ color: 'red' }}>
        {props.errors.includes('firstName') ||
        props.errors.includes('lastName') ||
        props.errors.includes('address')
          ? 'PLease correct the fields before proceeding'
          : null}
      </span>
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
          placeholder="Enter your LastName"
          value={props.lastName} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          type="text"
          name="address"
          id="address"
          placeholder="Enter your Address"
          value={props.address} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step2;
