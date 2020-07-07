import { all, takeLatest } from "redux-saga/effects";

import { Types as StoreTypes } from "./stores/stores";
import { loadStore } from "./stores/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(StoreTypes.LOAD_REQUEST, loadStore)]);
}
