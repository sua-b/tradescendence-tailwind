import Card from '../../ui/Card';
import useBlogs from './useBlogs';
import Spinner from '../../ui/Spinner';
import HeaderMini from '../../ui/HeaderMini';
import Button from '../../ui/Button';

export default function AllBlogs({ category }) {
  const { blogs, isLoading } = useBlogs();
  const filter = blogs.filter((item, index) => index < 4);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <HeaderMini>{category}</HeaderMini>
      <ul className='px-4 grid gap-3 grid-cols-1 md:grid-cols-2 '>
        {filter?.map((item) => (
          <Card key={item.id} id={item.id}>
            <Card.Image src={item.image} alt={item.title} />
            <Card.Title>{item.title}</Card.Title>
          </Card>
        ))}
      </ul>
      <div className='flex justify-end px-2'>
        <Button color='indigo' text='white'>
          View {category} Blogs
        </Button>
      </div>
    </div>
  );
}
