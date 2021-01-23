import { getWithExpiry } from '../localstorage';

export const getAlbum = (id) => {
  const tokenValid = getWithExpiry('a-token');

  console.log('res oq');

  return fetch(`https://api.spotify.com/v1/albums/${id}`, {
    credentials: 'same-origin',
    headers: {
      Authorization: 'Bearer ' + tokenValid,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return { error: response.statusText };
    })
    .catch((err) => {
      return { error: err.message };
    });
};

export const getSearchAlbums = (search) => {
  const tokenValid = getWithExpiry('a-token');

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
        return response.json();
      }
      return { error: response.statusText };
    })
    .catch((err) => {
      return { error: err.message };
    });
};
