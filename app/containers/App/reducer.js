import { fromJS } from 'immutable';
import { reducer as formReducer } from 'redux-form';
import { LOAD_POSTS_SUCCESS, LOAD_POSTS, LOAD_POSTS_ERROR } from './constants';
import { CREATE_POSTS } from '../AddPosts/constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  posts: false,
  input: false,
  form: formReducer,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POSTS:
      return state.setIn('input', action.input);
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
