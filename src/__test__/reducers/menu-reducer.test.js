import menuReducer from '../../reducers/menu-reducer';
import * as c from './../../actions/ActionTypes';

describe('menuReducer', () => {

  let action;
  const menuData = {
    name: 'Black Butte Porter',
    brand: 'Deschutes Brewery',
    price: '$9.50',
    alcoholContent: '5.5%',
    id: 1
  };

  const currentState = {
    1: {
      name: 'Black Butte Porter',
      brand: 'Deschutes Brewery',
      price: '$9.50',
      alcoholContent: '5.5%',
      id: 1 },
    2: {
      name: 'Mirror Pond Pale Ale',
      brand: 'Deschutes Brewery',
      price:  '$9.50',
      alcoholContent: '5.0%',
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(menuReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new beer data to masterKegMenu', () => {
    const { name, brand, price, alcoholContent, id } = menuData;
    action = {
      type: c.ADD_BEER,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    };

    expect(menuReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  });

  test('Should successfully delete a beer', () => {
    action = {
      type: c.DELETE_BEER,
      id: 1
    };
    expect(menuReducer(currentState, action)).toEqual({
        2: {
          name: 'Mirror Pond Pale Ale',
          brand: 'Deschutes Brewery',
          price:  '$9.50',
          alcoholContent: '5.0%',
          id: 2 }
    });
  });


});

