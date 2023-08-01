import { useNavigate, useParams } from 'react-router-dom';
import useFilterBlogs from './useFilterBlogs';

import Spinner from '../../ui/Spinner';
import HeaderMini from '../../ui/HeaderMini';
import Button from '../../ui/Button';
import BlogsTile from '../../ui/BlogsTile';

export default function CategoryBlogs({ category }) {
  const navigate = useNavigate();
  const params = useParams();

  let path = category || params.category;

  const { filteredBlog, isLoading } = useFilterBlogs({ path });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <HeaderMini>{path}</HeaderMini>

      <BlogsTile blogs={filteredBlog} size={category ? 'half' : 'full'} />

      <div className='flex justify-end px-2'>
        <Button
          color='indigo'
          text='white'
          onClick={() => navigate(`/blogs/category/${category}`)}
        >
          View {path} Blogs
        </Button>
      </div>
    </div>
  );
}
