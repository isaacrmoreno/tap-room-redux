
import * as actions from './../../actions';

describe('Tap Room Le Royal actions', () => {
  it('deleteBeer should create DELETE_BEER action', () => {
    expect(actions.deleteBeer(1)).toEqual({
      type: 'DELETE_BEER',
      id: 1
    });
  });
});