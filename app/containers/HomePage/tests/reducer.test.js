import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { loadPosts } from '../../App/actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      posts: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadPosts action correctly', () => {
    const expectedResult = state.set('posts');

    expect(homeReducer(state, loadPosts())).toEqual(expectedResult);
  });
});
