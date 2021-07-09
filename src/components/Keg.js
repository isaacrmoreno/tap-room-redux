import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  let pintsAvailable = props.pints > 0 ? props.pints : "Out of Stock";

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>Name: {props.name} | Brand: {props.Brand} | Price: {props.price}$ | ABV: {props.alcoholContent} | Pints Available: {pintsAvailable}</h3>
      </div>
      <button onClick={()=> props.onClickSellPint(props.id)}>Sell Pint</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired, 
  alcoholContent: PropTypes.string.isRequired,
  pints: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onClickSellPint: PropTypes.func
};

export default Keg;