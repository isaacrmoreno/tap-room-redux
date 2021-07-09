import menuReducer from '../../reducers/menu-reducer';

describe('menuReducer', () => {

  let action;
  const menuData = {
    name: 'Black Butte Porter',
    brand: 'Deschutes Brewery',
    price: '$9.50',
    alcoholContent: '5.5%',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(menuReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new beer data to masterKegMenu', () => {
    const { name, brand, price, alcoholContent, id } = menuData;
    action = {
      type: 'ADD_BEER',
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

});
