import {call, put} from 'redux-saga/effects';

const url = `https://my.api.mockaroo.com/epilist?key=52d6c330`;

import * as appAction from '../../actions/appActions';

export function* getEquipaments() {
  try {
    const response = yield call(api.get, url);

    let {success} = response.data;
    if (success) {
      yield put(appAction.AppTokenSuccess(response.data));
    } else {
      yield put(appAction.AppTokenFailed(response.data));
    }
  } catch (error) {
    yield put(appAction.AppTokenFailed(error));
  }
}