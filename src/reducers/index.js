import formVisibleReducer from './form-visible-reducer';
import menuReducer from './menu-reducer';
import selectedKegReducer from './selected-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegMenu: menuReducer,
  selectedKeg: selectedKegReducer
});

export default rootReducer;