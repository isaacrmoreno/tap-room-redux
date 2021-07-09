import React from 'react'
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickDelete } = props

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>Name: {keg.name}</h3>
      <h3>Brand: {keg.brand}</h3>
      <h3>Price: {keg.price}$</h3>
      <h3>ABV: {keg.alcoholContent}</h3>
      <hr/>

      <button onClick = {() => onClickDelete(keg.id)}>Remove Keg</button>
      <button onClick = { props.onClickEdit}>Edit Keg Details</button>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
}

export default KegDetail;