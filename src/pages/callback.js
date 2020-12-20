import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setWithExpiry } from '../store/localstorage'

export default function Callback() {
  const router = useRouter()

  useEffect(() => {
    const params = router.asPath.split('&')
    const expires = params[2].split('=')[1]
    const token = params[0].split('=')[1]

    setWithExpiry('a-token', token, expires)
    router.push('/')
  }, [])
  return null
}
