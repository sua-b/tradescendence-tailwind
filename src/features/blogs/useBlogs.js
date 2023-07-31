import { getBlogs } from '../../services/apiBlogs';
import { useQuery } from '@tanstack/react-query';


export default function useBlogs() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
  });
  return { blogs: data, error, isLoading };
}
