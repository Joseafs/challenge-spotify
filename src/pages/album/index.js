import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  //   const { pid } = router.query

  console.log('Rout:', router);

  return <p>Index !</p>;
};

export default Post;
