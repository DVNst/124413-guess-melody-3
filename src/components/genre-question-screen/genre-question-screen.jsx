import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameType} from "../../const.js";

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: [false, false, false, false],
    };
  }

  render() {
    const {question, onAnswer, renderPlayer} = this.props;
    const {answers: userAnswers} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {question.genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, this.state.answers);
          }}
        >
          {question.answers.map((answer, i) => (
            <div className="track" key={`${i}-${answer.genre}`}>
              {renderPlayer(answer.src, i)}
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`}
                  checked={userAnswers[i]}
                  onChange={(evt) => {
                    const value = evt.target.checked;
                    this.setState({
                      answers: [...userAnswers.slice(0, i), value, ...userAnswers.slice(i + 1)],
                    });
                  }}
                />
                <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
              </div>
            </div>
          ))}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
  }),
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
