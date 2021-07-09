import formVisibleReducer from './form-visible-reducer';
import menuReducer from './menu-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegMenu: menuReducer
});

export default rootReducer;