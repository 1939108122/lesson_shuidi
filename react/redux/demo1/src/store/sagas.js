import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getList } from './actionTypes'
import axios from 'axios'

function* mySagas() {
  yield takeEvery(GET_MY_LIST, getList )
}

function* getList () {
  // axios.get('http://rap2.taobao.org:38080/app/mock/252084/get/redux')
  // .then((res) => {
  //   const data = res.data
  //   const action = getList(data)
  //   put(action)
  // })

  const { data: res } = axios.get('http://rap2.taobao.org:38080/app/mock/252084/get/redux')
  const action = getList(res)
  yield put(action)
}
export default mySagas