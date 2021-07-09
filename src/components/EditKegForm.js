import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFromSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      id: keg.id});
  }

    return (
      <React.Fragment>
        <ReusableForm
        formSubmissionHandler={handleEditKegFromSubmission}
        buttonText="Edit Keg Details"/>
      </React.Fragment>
    );
  }


EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;