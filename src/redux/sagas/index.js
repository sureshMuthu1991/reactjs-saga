import { put, takeLatest, all, call } from 'redux-saga/effects'

import axios from 'axios';

function getlistApis() {
  return axios.request({
    method: 'get',
    url: 'https://reqres.in/api/users/2',
  });
}

function* getlistApi() {
  try {
    let { data } = yield call(getlistApis);
    yield put({ type: "GET_API_RESPONSE", json: data.data, });
  } catch (e) {
  }
}
function* getApi() {
  yield takeLatest('GET_API', getlistApi)
}

export default function* rootSaga() {
  yield all([
    getApi()
  ])
}