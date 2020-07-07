import { call, put, select, take } from "redux-saga/effects";
import { getProducts } from "../../../service/api";

import { Types as StoreTypes } from "../store/store";

import { loadSuccess, loadFailure } from "./products";

export const getStoresFromState = (state) => state.store.data;

export function* loadProducts() {
  try {
    yield take(StoreTypes.LOAD_SUCCESS);

    const store = yield select(getStoresFromState);

    const response = yield call(getProducts, store);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
