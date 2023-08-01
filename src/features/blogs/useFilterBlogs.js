import { filterBlogs } from '../../services/apiBlogs';
import { useQuery } from '@tanstack/react-query';

export default function useFilterBlogs({ path }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['blogs', path],
    queryFn: () => filterBlogs(path),
  });

  return { filteredBlog: data, error, isLoading };
}
