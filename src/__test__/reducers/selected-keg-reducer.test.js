import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from '../../actions/ActionTypes';

describe("selectedKegReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle selected keg state to true', () => {
    expect(selectedKegReducer(false, { type: c.SELECT_KEG })).toEqual(true);
  });

});