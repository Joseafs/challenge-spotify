import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setWithExpiry } from '../store/localstorage'
import styles from '../theme/Home.module.css'

export default function Callback() {
  const router = useRouter()

  useEffect(() => {
    const params = router.asPath.split('&')
    const expires = params[2].split('=')[1]
    const token = params[0].split('=')[1]

    setWithExpiry('a-token', token, expires)
    router.push('/')
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
