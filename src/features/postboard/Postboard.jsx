import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import useBlogs from './useBlogs';
import Spinner from '../../ui/Spinner';

export default function Postboard() {
  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`/blogs/${id}`);
  }

  const { blogs, isLoading } = useBlogs();

  if (isLoading) return <Spinner />;

  return (
    <ul className='flex flex-row flex-wrap gap-6 justify-center'>
      {blogs?.map((item) => (
        <Card key={item.id}>
          <Card.Image src={item.image} alt={item.title} />
          <Card.Title>{item.title}</Card.Title>
          <Card.Author>By: {item.author}</Card.Author>
          {/* <Card.Body>{item.content}</Card.Body> */}
          <Button color='teal' onClick={() => handleClick(item.id)}>
            Read more
          </Button>
        </Card>
      ))}
    </ul>
  );
}
