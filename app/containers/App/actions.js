import { LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } from './constants';

export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const postsLoaded = (posts) => ({
  type: LOAD_POSTS_SUCCESS,
  posts,
});

export const postLoadingError = (error) => ({
  type: LOAD_POSTS_ERROR,
  error,
});
