/* eslint-disable react/destructuring-assignment */
import { FormGroup, Label, Input } from 'reactstrap';

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <span style={{ color: 'red' }}>
        {props.errors.includes('acceptTermsAndCondition')
          ? 'PLease correct the fields before proceeding'
          : null}
      </span>
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
          <Input
            type="checkbox"
            name="acceptTermsAndCondition"
            value={props.acceptTermsAndCondition} // Prop: The username input data
            onChange={props.handleChange}
          />
          {' Accept T&C '}
        </Label>
      </FormGroup>
    </>
  );
};

export default Step3;
