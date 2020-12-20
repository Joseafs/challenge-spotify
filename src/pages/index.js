import { useEffect, useLayoutEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getWithExpiry } from '../store/localstorage'
import { getAlbumsAction } from '../store/actions'

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const tokenValid = getWithExpiry('a-token')

    if (!tokenValid) router.push('/login')

    dispatch(getAlbumsAction())

    console.log('Token:', tokenValid)
  }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
