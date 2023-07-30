import { useNavigate } from 'react-router-dom';
import blog from '../data/blog';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function Blogs() {
  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`/blogs/${id}`);
  }
  return (
    <ul className='flex flex-row flex-wrap gap-8'>
      {blog.map((item) => (
        <Card key={item.id}>
          <Card.Image src={item.image_url} alt={item.title} />
          <Card.Title>{item.title}</Card.Title>
          <Card.Author>By: {item.author}</Card.Author>
          {/* <Card.Body>{item.content}</Card.Body> */}
          <Button onClick={() => handleClick(item.id)}>Read more</Button>
        </Card>
      ))}
    </ul>
  );
}
