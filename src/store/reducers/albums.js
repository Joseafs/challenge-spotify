import initialState from './initialState'
import * as types from '../actions/actionTypes'
import update from 'immutability-helper'

const albums = (state = initialState.album, action) => {
  switch (action.type) {
    case types.GET_ALBUMS_OK:
      return update(state, { list: { $set: action.list } })

    default:
      return state
  }
}

export default albums
