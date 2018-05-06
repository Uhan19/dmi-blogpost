import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_POSTS } from 'containers/App/constants';
import { postsLoaded, postsLoadingError } from 'containers/App/actions';

// import request from '../utils/request';
import { makeSelectPost } from 'containers/HomePage/selectors';

export function* getPosts() {
  const requestURL = '/';
  alert('getPosts!');
  try {
    // const posts = yield call(request, requestedURL);
    yield put(reposLoaded(repos));
  } catch (err) {
    console.log('swallowed');
    yield put(repoLoadingError(err));
  }
}

export default function* postsData() {
  yield takeLatest(LOAD_POSTS, getPosts);
}
