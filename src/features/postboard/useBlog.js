import { useParams } from 'react-router-dom';
import { getBlog } from '../../services/apiBlogs';
import { useQuery } from '@tanstack/react-query';

export default function useBlog() {
  const { blogId } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: [`blogs`, blogId],
    queryFn: () => getBlog(blogId),
    retry: false,
  });

  return { blog: data, error, isLoading };
}
