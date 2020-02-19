import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `artist`,
    track: {
      artist: `name1`,
      src: `path-to-audio`,
    },
    answers: [
      {
        picture: `path-to-avatar1`,
        artist: `name1`,
      }, {
        picture: `path-to-avatar2`,
        artist: `name2`,
      }, {
        picture: `path-to-avatar3`,
        artist: `name3`,
      }
    ]
  },
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const userAnswer = {
    picture: `path-to-avatar1`,
    artist: `name1`,
  };

  const ArtistQuestion = shallow(
      <ArtistQuestionScreen
        question={question}
        onAnswer={onAnswer}
      />
  );

  const form = ArtistQuestion.find(`form`);
  const inputOne = form.find(`input`).at(0);

  inputOne.simulate(`change`, {
    preventDefault() {}
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
