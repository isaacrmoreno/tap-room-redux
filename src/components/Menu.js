import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function Menu(props) {
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.menu).map((keg) =>
      <Keg
        whenKegClicked = {props.onKegSelection}
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        pints={keg.pints}
        id={keg.id}
        key={keg.id}
        />
      )}
    </React.Fragment>
  );
} 

Menu.propTypes = {
  menu: PropTypes.object,
  onKegSelection: PropTypes.func,
  onClickSellPint: PropTypes.func
};

export default Menu;