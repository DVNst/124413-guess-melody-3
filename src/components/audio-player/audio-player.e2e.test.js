import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

Enzyme.configure({adapter: new Adapter()});

const mock = {
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  isPlaying: true,
};

it(`AudioPlayer button be pressed`, () => {
  const audioPlayer = mount(
      <AudioPlayer
        src={mock.src}
        onPlayButtonClick={() => {}}
        isPlaying={mock.isPlaying}
      />
  );

  let playButton = audioPlayer.find(`.track__button`);
  audioPlayer.setState({isLoading: false});

  expect(playButton.hasClass(`track__button--pause`)).toBe(true);
  expect(playButton.hasClass(`track__button--play`)).toBe(false);

  playButton.simulate(`click`);

  playButton = audioPlayer.find(`.track__button`);

  expect(playButton.hasClass(`track__button--pause`)).toBe(false);
  expect(playButton.hasClass(`track__button--play`)).toBe(true);
});
