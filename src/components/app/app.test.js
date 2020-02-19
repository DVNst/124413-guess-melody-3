import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const questions = [
  {
    type: `artist`,
    track: {
      artist: `artist1`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        picture: `https://api.adorable.io/avatars/200/1`,
        artist: `artist1`,
      }, {
        picture: `https://api.adorable.io/avatars/200/2`,
        artist: `artist2`,
      }, {
        picture: `https://api.adorable.io/avatars/200/3`,
        artist: `artist3`,
      }
    ]
  }, {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      }, {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
      }, {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
      }, {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      }
    ],
  }
];

it(`Should App render correctly`, () => {
  const tree = renderer.create(
      <App
        errorCount={3}
        questions={questions}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
