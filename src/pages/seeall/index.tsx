import { useRouter } from 'next/router';

const SeeAll = () => {
  const router = useRouter();
  return <h1>See All : {router.query.type}</h1>;
};

export default SeeAll;
