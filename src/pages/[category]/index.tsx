import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();
  return <h1>Category : {router.query.category}</h1>;
};

export default Category;
