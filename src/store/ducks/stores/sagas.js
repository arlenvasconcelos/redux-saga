import { call, put, select, take } from "redux-saga/effects";
import { getClients, getStore, getProducts } from "../../../service/api";

import { loadSuccess, loadFailure } from "./stores";

export const getStoresFromState = (state) => state.stores;

export function* loadStore() {
  try {
    const response = yield call(getStore);

    console.log(response);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
