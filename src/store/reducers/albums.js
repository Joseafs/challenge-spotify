import initialState from './initialState';
import * as types from '../actions/actionTypes';
import update from 'immutability-helper';

const albums = (state = initialState.album, action) => {
  const { search, searchedResults } = state;

  switch (action.type) {
    case types.GET_SEARCH_ALBUMS_OK:
      const newSearchResults = search.list.length
        ? [{ ...search }, ...searchedResults]
        : searchedResults;

      return update(state, {
        search: {
          $set: {
            text: action.result.search,
            list: action.result.list,
          },
        },
        searchedResults: { $set: newSearchResults },
      });

    default:
      return state;
  }
};

export default albums;
