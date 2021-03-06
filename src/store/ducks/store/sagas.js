import { call, put } from "redux-saga/effects";
import { getStore } from "../../../service/api";

import { loadSuccess, loadFailure } from "./store";

export const getStoresFromState = (state) => state.stores;

export function* loadStore() {
  try {
    const response = yield call(getStore);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
