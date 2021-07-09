import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
  <Form.Group className="formInput" >
    <Form.Label>Input New Keg Details:</Form.Label>
    <Form.Control type="text" name="name" placeholder="Name:" />
  </Form.Group>
  <Form.Group className="formInput">
    <Form.Control type="text" name="brand" placeholder="Brand:" />
  </Form.Group>
  <Form.Group className="formInput" >
    <Form.Control type="text" name="price" placeholder="Price:" />
  </Form.Group>
  <Form.Group className="formInput">
    <Form.Control type="text" name="alcoholContent" placeholder="ABV:" />
  </Form.Group>
  <Button variant="primary" size="lg" type='submit'>{props.buttonText}</Button>
  </Form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;