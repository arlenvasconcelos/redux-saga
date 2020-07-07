import { fork, all } from "redux-saga/effects";

import { loadStore } from "./store/sagas";
import { loadProducts } from "./products/sagas";
import { loadClients } from "./clients/sagas";

export default function* rootSaga() {
  return yield all([fork(loadStore), fork(loadProducts), fork(loadClients)]);
}
