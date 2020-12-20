import { useRouter } from 'next/router'
import { useEffect } from 'react'

const authorize =
  'https://accounts.spotify.com/authorize?response_type=token&client_id=6368dbcab7d741a7ac70c32a4fe5e2c9&redirect_uri=http://localhost:3000/callback&scope=user-read-private user-read-email&state=753'

export default function Login() {
  const router = useRouter()

  useEffect(() => {
    router.push(authorize)
  }, [])

  return null
}
