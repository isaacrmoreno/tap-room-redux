export const deleteBeer = id => ({
  type: 'DELETE_BEER',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addBeer = (beer) => {
  const { name, brand, price, alcoholContent, id } = beer;
  return {
    type: 'ADD_BEER',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
  }
}