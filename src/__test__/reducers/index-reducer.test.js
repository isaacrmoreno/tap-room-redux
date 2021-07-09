import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import menuReducer from '../../reducers/menu-reducer'
import formVisibleReducer from '../../reducers/form-visible-reducer'
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegMenu: {},
      formVisibleOnPage: false,
      selectedKeg: false, // iffy about this test? 
    });
  });

  test('Check that initial state of menuReducer matches root reducer', () => {
    expect(store.getState().masterKegMenu).toEqual(menuReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_BEER action works for menuReducer and root reducer', () => {
    const action = {
      type: c.ADD_BEER,
      name: 'Black Butte Porter',
      brand: 'Deschutes Brewery',
      price: '$9.50',
      alcoholContent: '5.5%',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegMenu).toEqual(menuReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that SELECT_KEG action works for selectedKegReducer and root reducer', () => {
    const action = {
      type: c.SELECT_KEG
    }
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });

});