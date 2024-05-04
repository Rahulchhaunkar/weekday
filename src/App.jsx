import { useState } from "react";

import "./App.css";
import FilterScreen from "./screens/search/content";
import { Provider } from "react-redux";
import { store } from "./lib/store";

function App() {
  return (
    <Provider store={store}>
      <FilterScreen />
    </Provider>
  );
}

export default App;
