import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getWithExpiry } from '../store/localstorage'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const tokenValid = getWithExpiry('a-token')

    if (!tokenValid) {
      router.push('/login')
    }

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
