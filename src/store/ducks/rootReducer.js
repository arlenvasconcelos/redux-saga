import { combineReducers } from "redux";

import store from "./store/store";
import products from "./products/products";
import clients from "./clients/clients";

export default combineReducers({
  store,
  products,
  clients,
});
