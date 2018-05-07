import { CREATE_POSTS, CHANGE_INPUT } from './constants';
import axios from 'axios';

/**
 * Changes the input field of the form
 *
 * @param  {post} post The new text of the input field
 *
 * @return {object}    An action object with a type of CREATE_POSTS
 */
export function createPosts(input, callback) {
  const request = axios({ method: 'post', url: '/', data: input }).then(() =>
    callback()
  );
  return {
    type: CREATE_POSTS,
    payload: input,
  };
}
