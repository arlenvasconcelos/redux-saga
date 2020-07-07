import { call, put, select, take } from "redux-saga/effects";
import { getClients } from "../../../service/api";

import { Types as StoreTypes } from "../store/store";

import { loadSuccess, loadFailure } from "./clients";

export const getStoresFromState = (state) => state.store.data;

export function* loadClients() {
  try {
    yield take(StoreTypes.LOAD_SUCCESS);

    const store = yield select(getStoresFromState);

    const response = yield call(getClients, store);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
