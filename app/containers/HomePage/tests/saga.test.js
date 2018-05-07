/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_POSTS } from 'containers/App/constants';
import { postsLoaded, postsLoadingError } from 'containers/App/actions';

import postsData, { getPosts } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getPosts Saga', () => {
  let getPostsGenerator;
  beforeEach(() => {
    getPostsGenerator = getPosts();

    const selectDescriptor = getPostsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the postsLoaded action if it requests the data successfully', () => {
    const response = [
      {
        post: 'hello',
      },
      {
        post: 'world!',
      },
    ];
    const putDescriptor = getPostsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(postsLoaded(response)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getPostsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(postsLoadingError(response)));
  });
});

describe('postsDataSaga Saga', () => {
  const postsDataSaga = postsData();

  it('should start task to watch for LOAD_POSTS action', () => {
    const takeLatestDescriptor = postsDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_POSTS, getPosts));
  });
});
