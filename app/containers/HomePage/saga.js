import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_POSTS } from 'containers/App/constants';
import { postsLoaded, postsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getPosts() {
  const requestURL = '/';
  console.log('getPosts!');
  try {
    const posts = yield call(request, requestedURL);
    console.log(posts);
    yield put(postsLoaded(posts));
  } catch (err) {
    console.log('swallowed');
    yield put(postsLoadingError(err));
  }
}

export default function* postsData() {
  yield takeLatest(LOAD_POSTS, getPosts);
}
