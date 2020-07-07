import { fork, all, takeLatest } from "redux-saga/effects";

// import { Types as StoreTypes } from "./store/store";
import { loadStore } from "./store/sagas";
import { loadProducts } from "./products/sagas";
import { loadClients } from "./clients/sagas";

export default function* rootSaga() {
  // return yield all([takeLatest(StoreTypes.LOAD_REQUEST, loadStore)]);

  return yield all([fork(loadStore), fork(loadProducts), fork(loadClients)]);
}
