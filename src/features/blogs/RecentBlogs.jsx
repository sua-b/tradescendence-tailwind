import Card from '../../ui/Card';
import useBlogs from './useBlogs';
import Spinner from '../../ui/Spinner';
import HeaderMini from '../../ui/HeaderMini';
import Button from '../../ui/Button';

export default function RecentBlogs() {
  const { blogs, isLoading } = useBlogs();
  const filter = blogs?.filter((item, index) => index < 7);

  if (isLoading) return <Spinner />;

  return (
    <>
      <HeaderMini>Recent blogs</HeaderMini>

      <ul className='px-4 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {filter?.map((item) => (
          <Card key={item.id} id={item.id} className='first:col-span-2 '>
            <Card.Image src={item.image} alt={item.title} />
            <Card.Title>{item.title}</Card.Title>
          </Card>
        ))}
      </ul>
      <div className='flex justify-end px-2'>
        <Button color='indigo' text='white'>
          View All Blogs
        </Button>
      </div>
    </>
  );
}
