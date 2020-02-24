import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

const question = {
  type: `artist`,
  track: {
    artist: `artist1`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [
    {
      picture: `https://api.adorable.io/avatars/200/0`,
      artist: `artist1`,
    }, {
      picture: `https://api.adorable.io/avatars/200/1`,
      artist: `artist2`,
    }, {
      picture: `https://api.adorable.io/avatars/200/2`,
      artist: `artist3`,
    }
  ],
};

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={question}
        onAnswer={() => {}}
        renderPlayer={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
