import initialState from './initialState'
import * as types from '../actions/actionTypes'
import update from 'immutability-helper'

const albums = (state = initialState.album, action) => {
  switch (action.type) {
    case types.GET_ALBUMS_OK:
      return update(state, { list: { $set: action.list } })

    case types.GET_SEARCH_OK:
      return update(state, {
        list: { $set: action.result.list },
        search: { $set: action.result.search },
      })

    default:
      return state
  }
}

export default albums
