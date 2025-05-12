import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPosts() {
  try {
    const response = yield call(axios.get, 'https://dummyjson.com/posts');
    yield put({ type: 'FETCH_POSTS_SUCCESS', payload: response.data.posts });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
  }
}

function* fetchPostDetail(action) {
  try {
    const response = yield call(axios.get, `https://dummyjson.com/posts/${action.payload}`);
    yield put({ type: 'FETCH_POST_DETAIL_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
  }
}

function* fetchComments(action) {
  try {
    const response = yield call(axios.get, `https://dummyjson.com/posts/${action.payload}/comments`);
    yield put({ type: 'FETCH_COMMENTS_SUCCESS', payload: response.data.comments });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
  }
}

function* postsSaga() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPosts);
  yield takeEvery('FETCH_POST_DETAIL_REQUEST', fetchPostDetail);
  yield takeEvery('FETCH_COMMENTS_REQUEST', fetchComments);
}

export default postsSaga;

