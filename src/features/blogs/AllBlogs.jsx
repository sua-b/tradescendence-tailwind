import Card from '../../ui/Card';
import useBlogs from './useBlogs';
import Spinner from '../../ui/Spinner';

export default function AllBlogs() {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) return <Spinner />;

  return (
    <>
      <ul className='px-4 pt-4 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
