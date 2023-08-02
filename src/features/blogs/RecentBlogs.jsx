import Card from '../../ui/Card';
import useBlogs from './useBlogs';
import Spinner from '../../ui/Spinner';
import HeaderMini from '../../ui/HeaderMini';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import BlogsTile from '../../ui/BlogsTile';

export default function RecentBlogs() {
  const navigate = useNavigate();
  const { blogs, isLoading } = useBlogs();

  if (isLoading) return <Spinner />;

  return (
    <>
      <HeaderMini color='orange'>Recent blogs</HeaderMini>

      <BlogsTile blogs={blogs} size='full' />

      <div className='flex justify-end px-2'>
        <Button color='indigo' text='white' onClick={() => navigate('/blogs')}>
          View All Blogs
        </Button>
      </div>
    </>
  );
}
