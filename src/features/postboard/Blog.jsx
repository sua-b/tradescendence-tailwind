import Spinner from '../../ui/Spinner';
import useBlog from './useBlog';

export default function Blog() {
  const { blog, isLoading } = useBlog();

  if (isLoading) return <Spinner />;

  const { title, image, author, content } = blog;

  return (
    <div className=' mx-auto w-5/6 lg:w-2/3 flex justify-center items-center flex-col'>
      <img className='w-[400px]' src={image} alt={title} />
      <h2 className='text-xl font-semibold py-5'>{title}</h2>
      <small>By: {author}</small>
      <p className='py-5'>{content}</p>
    </div>
  );
}
