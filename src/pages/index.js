import { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbumsAction } from '../store/actions'
import Layout from '../components/layout'

function Home() {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlbumsAction())
  }, [])

  const listAlbums = useSelector((state) => state.albums.list)

  useEffect(() => {
    console.log(listAlbums)
  }, [listAlbums])

  return (
    <Layout title="Pesquise no Spotify !">
      <div>dsadasdsa</div>
    </Layout>
  )
}

export default memo(Home)
