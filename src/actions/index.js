import * as c from './ActionTypes';

export const deleteBeer = id => ({
  type: c.DELETE_BEER,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const selectedKeg = () => ({
  type: c.SELECT_KEG
})

export const addBeer = (beer) => {
  const { name, brand, price, alcoholContent, id } = beer;
  return {
    type: c.ADD_BEER,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
  }
}