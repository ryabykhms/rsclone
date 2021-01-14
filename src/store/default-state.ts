import { DEFAULT_FIELD_SIZE, DEFAULT_GAMER_NAME, DEFAULT_LANG, DEFAULT_SECOND_GAMER_NAME } from '@constants';
import { IAppState } from '@types';

export const defaultState: IAppState = {
  game: {
    isOnline: false,
    fieldSize: DEFAULT_FIELD_SIZE,
    time: 0,
    isBot: false,
    firstWord: '',
    currentWord: '',
    isPlayer1Turn: true,
    isGameStart: false,
    player1: {
      points: 0,
      words: [],
      penalties: 0,
      isLose: false,
    },
    player2: {
      points: 0,
      words: [],
      penalties: 0,
      isLose: false,
    },
  },

  settings: {
    lang: DEFAULT_LANG,
    isSoundOn: true,
    gamerName: DEFAULT_GAMER_NAME,
    secondGamerName: DEFAULT_SECOND_GAMER_NAME,
    currentTheme: 'light',
  },

  rating: {
    field: DEFAULT_FIELD_SIZE,
    withOnline: false,
    withBot: false,
    top: [],
  },

  notify: null,
};
