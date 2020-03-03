import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";

const Settings = {
  ERROR_COUNT: 3,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorCount={Settings.ERROR_COUNT}
        questions={questions}
      />
    </Provider>,
    document.querySelector(`#root`)
);
