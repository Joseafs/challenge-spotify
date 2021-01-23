import React from 'react';
import { useRouter } from 'next/router';
import { getAlbumAction } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { memo, useEffect } from 'react';

function AlbumPage() {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  const albumInfo = useSelector((state) => state.albumView.info);

  useEffect(() => {
    console.log('ID after', albumInfo);

    if (!id) return;
    dispatch(getAlbumAction(id));
  }, [id]);

  return <p>Lorem</p>;
}

export default memo(AlbumPage);
