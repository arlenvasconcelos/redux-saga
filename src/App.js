import React from "react";

import { Provider } from "react-redux";
import { Store } from "./components";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Store />
      </Provider>
    </div>
  );
}

export default App;
