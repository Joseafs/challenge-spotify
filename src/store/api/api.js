import { getWithExpiry } from '../localstorage'

export const getAlbums = () => {
  const tokenValid = getWithExpiry('a-token')

  return fetch('https://api.spotify.com/v1/me/player/recently-played', {
    credentials: 'same-origin',
    headers: {
      Authorization: 'Bearer ' + tokenValid,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      return { error: response.statusText }
    })
    .catch((err) => {
      return { error: err.message }
    })
}

export const getSearch = (search) => {
  const tokenValid = getWithExpiry('a-token')

  return fetch(
    `https://api.spotify.com/v1/search?q=${search}&type=track,artist,album&limit=5`,
    {
      credentials: 'same-origin',
      headers: {
        Authorization: 'Bearer ' + tokenValid,
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      return { error: response.statusText }
    })
    .catch((err) => {
      return { error: err.message }
    })
}
