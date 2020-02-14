import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      errorCount={3}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
