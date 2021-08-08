import {GET_DATA, LOADED_FAIL, LOADED_SUCCESS} from './types';

const initialState = {
  newsData: {
    data: [
      {name: 'Info', desc: 'blablabla', author: 'Michael Buble', id: 1},
      {
        name: 'Second news',
        desc: 'Dupa - dolna część pleców ',
        author: 'Danny DeVito',
        id: 2,
      },
      {
        name: 'Third news',
        desc: 'Jakaś losowa informacja',
        author: 'Twoja mama',
        id: 3,
      },
    ],
  },
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        loading: true,
        error: null,
        news: {},
      };

    case LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        news: payload.data,
      };

    case LOADED_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
