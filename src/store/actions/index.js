import * as types from './actionTypes'

export const getAlbumAction = (id) => ({
  type: types.GET_ALBUM_RQ,
  id,
})

export const getSearchAlbumsAction = (search) => ({
  type: types.GET_SEARCH_ALBUMS_RQ,
  search,
})
