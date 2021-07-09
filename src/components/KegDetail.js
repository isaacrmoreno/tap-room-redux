import React from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function KegDetail(props) {
  const { keg, onClickDelete } = props

  return (
    <React.Fragment>
      <h2>Keg Details</h2>
      <h3>Name: {keg.name}</h3>
      <h3>Brand: {keg.brand}</h3>
      <h3>Price: {keg.price}$</h3>
      <h3>ABV: {keg.alcoholContent}</h3>
      <hr/>

      <Button variant="primary" size="lg" onClick = {() => onClickDelete(keg.id)}>Remove Keg</Button>
      <Button variant="primary" size="lg" onClick = { props.onClickEdit}>Edit Keg Details</Button>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
}

export default KegDetail;