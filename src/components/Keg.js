import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>Name: {props.name} | Brand: {props.Brand} | Price: {props.price}$ | ABV: {props.alcoholContent}</h3>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired, 
  alcoholContent: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
};

export default Keg;