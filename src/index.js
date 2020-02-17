import React from "react";
import ReactDOM from "react-dom";
import questions from "./mocks/questions.js";
import App from "./components/app/app.jsx";

const Settings = {
  ERROR_COUNT: 3,
};

ReactDOM.render(
    <App
      errorCount={Settings.ERROR_COUNT}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
