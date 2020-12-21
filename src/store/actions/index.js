import * as types from './actionTypes'

export const getAlbumsAction = () => ({
  type: types.GET_ALBUMS_RQ,
})

export const getSearchAction = (search) => ({
  type: types.GET_SEARCH_RQ,
  search,
})
