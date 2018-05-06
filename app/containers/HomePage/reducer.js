import { fromJS } from 'immutable';

import { LOAD_POSTS } from '../App/constants';

// The initial state of the App
const initialState = fromJS({
  posts: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state;
    default:
      return state;
  }
}

export default homeReducer;
