import { fromJS } from 'immutable';

import { CREATE_POSTS } from './constants';

// The initial state of the App
const initialState = fromJS({
  input: '',
});

function addPostsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POSTS:
      return state;
    default:
      return state;
  }
}

export default addPostsReducer;
