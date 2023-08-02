import RecentBlogs from '../features/blogs/RecentBlogs';
import CategoryBlogs from '../features/blogs/CategoryBlogs';

export default function Home() {
  return (
    <div>
      <RecentBlogs />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <CategoryBlogs category='Trading' />
        <CategoryBlogs category='Finance' />
        <CategoryBlogs category='Motivation' />
        <CategoryBlogs category='Life lessons' />
        <CategoryBlogs category='Habits' />
      </div>
    </div>
  );
}
