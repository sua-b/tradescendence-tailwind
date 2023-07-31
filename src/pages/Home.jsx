import RecentBlogs from '../features/blogs/RecentBlogs';
import CategoryBlogs from '../features/blogs/CategoryBlogs';

export default function Home() {
  return (
    <div>
      <RecentBlogs />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <CategoryBlogs category='Trading' />
        <CategoryBlogs category='Self-improvement' />
      </div>
    </div>
  );
}
