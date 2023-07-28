import { useParams } from 'react-router-dom';
import blogs from '../data/blog';

export default function Blog() {
  const { blogId } = useParams();
  const [{ id, title, author, content, image_url }] = blogs.filter(
    (item) => item.id === Number(blogId)
  );

  return (
    <div className=' mx-auto w-5/6 lg:w-2/3 flex justify-center items-center flex-col'>
      <img className='w-[400px]' src={image_url} alt={title} />
      <h2 className='text-xl font-semibold py-5'>{title}</h2>
      <small>By: {author}</small>
      <p className='py-5'>{content}</p>
    </div>
  );
}
