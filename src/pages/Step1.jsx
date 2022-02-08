/* eslint-disable react/destructuring-assignment */
import { FormGroup, Label, Input } from 'reactstrap';

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          value={props.password} // Prop: The username input data
          onChange={props.handlePssChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step1;
