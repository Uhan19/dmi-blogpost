import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_POSTS } from 'containers/App/constants';
import { postsLoaded, postsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getPosts() {
  const requestURL = '/';
  try {
    const posts = yield call(request, requestURL);
    yield put(postsLoaded(posts));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export default function* postsData() {
  yield takeLatest(LOAD_POSTS, getPosts);
}
