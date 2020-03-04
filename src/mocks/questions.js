const AVATAR_URL = `https://api.adorable.io/avatars/200`;

export default [
  {
    type: `artist`,
    track: {
      artist: `artist1`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}/A`,
        artist: `artist1`,
      }, {
        picture: `${AVATAR_URL}/AA`,
        artist: `artist2`,
      }, {
        picture: `${AVATAR_URL}/AB`,
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
