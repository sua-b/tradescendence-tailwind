import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addBlog as addBlogApi } from '../../services/apiBlogs';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function useAddBlog() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: addBlogApi,

    onSuccess: () => {
      toast.success('New blog added!');
      // queryClient.invalidateQueries({
      //   queryKey: ['blogs'],
      // });
      navigate('/');
    },
    onError: (err) => toast.error(err.message),
  });
  return { addBlog: mutate, isAdding: isLoading };
}
