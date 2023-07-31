import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addBlog as addBlogApi } from '../../services/apiBlogs';
import { toast } from 'react-hot-toast';

export default function useAddBlog() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: addBlogApi,

    onSuccess: () => {
      toast.success('new blog added');
      queryClient.invalidateQueries({
        queryKey: ['blogs'],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { addBlog: mutate, isAdding: isLoading };
}
