import { fromJS } from 'immutable';
import { reducer as formReducer } from 'redux-form';
import { LOAD_POSTS_SUCCESS, LOAD_POSTS, LOAD_POSTS_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  posts: false,
  form: formReducer,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn('posts', false);
    case LOAD_POSTS_SUCCESS:
      return state.setIn('posts', action.posts).set('loading', false);
    case LOAD_POSTS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
