/* eslint-disable react/destructuring-assignment */
import { FormGroup, Label, Input } from 'reactstrap';

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <p>We recommend creating a secure password for your account</p>

      <FormGroup>
        <Label for="exampleSelect">Select Country code</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>+91</option>
          <option>+1</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="password">phone Number</Label>
        <Input
          type="number"
          name="password"
          id="password"
          placeholder="Enter your Password"
          value={props.phoneNumber} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Accept term and conditions
        </Label>
      </FormGroup>
    </>
  );
};

export default Step3;
