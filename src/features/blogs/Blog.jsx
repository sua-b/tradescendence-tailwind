import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import useBlog from './useBlog';

export default function Blog() {
  const { blog, isLoading } = useBlog();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const { title, image, author, content } = blog;

  return (
    <>
      <Button color='teal' onClick={() => navigate(-1)}>
        &larr; Back
      </Button>
      <div className=' mx-auto w-5/6 flex justify-center items-center flex-col'>
        <img className='w-[400px]' src={image} alt={title} />
        <h2 className='text-xl font-semibold py-5'>{title}</h2>
        <small>By: {author}</small>
        <p className='py-5'>{content}</p>
      </div>
      <Button color='teal' onClick={() => navigate(-1)}>
        &larr; Back
      </Button>
    </>
  );
}
