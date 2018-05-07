// import { call, put, select, takeLatest } from 'redux-saga/effects';
// import { CREATE_POSTS } from './constants';
// import axios from 'axios';
// // import request from 'utils/request';
// import { makeSelectInput } from './selectors';

// export function* postMessage() {
//   // Select username from store
//   const message = yield select(makeSelectInput());
//   const requestURL = '/posts/new/message';
//   console.log('in postMessage');
//   const postData = (url, data) => axios.post(url, data);
//   try {
//     // Call our request helper (see 'utils/request')
//     const post = yield call(postData, [requestURL, message]);
//     yield put(reposLoaded(post));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }

// /**
//  * Root saga manages watcher lifecycle
//  //  */
// export default function* postInfo() {
//   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//   // By using `takeLatest` only the result of the latest API call is applied.
//   // It returns task descriptor (just like fork) so we can continue execution
//   // It will be cancelled automatically on component unmount
//   yield takeLatest(CREATE_POSTS, postMessage);
// }
