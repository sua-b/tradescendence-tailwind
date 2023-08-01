import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import useBlog from './useBlog';
import MDEditor from '@uiw/react-md-editor';

export default function Blog() {
  const { blog, isLoading } = useBlog();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const { title, image, author, content } = blog;

  return (
    <>
      <Button color='none' size='medium' onClick={() => navigate('/blogs')}>
        &larr; Back
      </Button>
      <div className=' mx-auto w-5/6 flex justify-center items-center flex-col whitespace-pre-line'>
        <img className='w-[400px]' src={image} alt={title} />
        <h2 className='text-xl font-semibold py-5'>{title}</h2>
        <small>By: {author}</small>

        <MDEditor.Markdown source={content} />
      </div>
    </>
  );
}
