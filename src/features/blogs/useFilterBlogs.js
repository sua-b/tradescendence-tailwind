import { filterBlogs } from '../../services/apiBlogs';
import { useQuery } from '@tanstack/react-query';

export default function useFilterBlogs({ category }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['blogs', category],
    queryFn: () => filterBlogs(category),
  });

  console.log(data);
  return { filteredBlog: data, error, isLoading };
}
