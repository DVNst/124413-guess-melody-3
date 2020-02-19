import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path-to-audio`,
        genre: `rock`,
      }, {
        src: `path-to-audio`,
        genre: `blues`,
      }, {
        src: `path-to-audio`,
        genre: `jazz`,
      }, {
        src: `path-to-audio`,
        genre: `rap`,
      }
    ],
  }
};

it(`When user answers genre question form is not sent`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();

  const genreQuestion = shallow(
      <GenreQuestionScreen
        question={question}
        onAnswer={onAnswer}
      />
  );

  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const {question} = mock;
  const onAnswer = jest.fn((...args) => [...args]);
  const userAnswer = [false, false, true, false];

  const genreQuestion = shallow(
      <GenreQuestionScreen
        question={question}
        onAnswer={onAnswer}
      />
  );

  const form = genreQuestion.find(`form`);
  const inputThree = genreQuestion.find(`input`).at(2);

  inputThree.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
