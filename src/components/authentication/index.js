import { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getWithExpiry } from '../../store/localstorage'

const authorize =
  'https://accounts.spotify.com/authorize?response_type=token&client_id=6368dbcab7d741a7ac70c32a4fe5e2c9&redirect_uri=http://localhost:3000/callback&scope=user-read-private user-read-email user-read-recently-played &state=753'

function Authentication() {
  const router = useRouter()

  useEffect(() => {
    const isTokenValid = getWithExpiry('a-token')
    if (isTokenValid) return
    router.push(authorize)
  }, [])

  return null
}

export default memo(Authentication)
