import Card from '../../ui/Card';
import useBlogs from './useBlogs';
import Spinner from '../../ui/Spinner';
import HeaderMini from '../../ui/HeaderMini';

export default function RecentBlogs() {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) return <Spinner />;

  return (
    <>
      <HeaderMini>Recent blogs</HeaderMini>

      <ul className='px-4 grid gap-3 grid-cols-2 md:grid-cols-4'>
        {blogs?.map((item) => (
          <Card key={item.id} id={item.id}>
            <Card.Image src={item.image} alt={item.title} />
            <Card.Title>{item.title}</Card.Title>
          </Card>
        ))}
      </ul>
    </>
  );
}
