import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBlog as deleteBlogApi } from '../../services/apiBlogs';

export default function useDeleteBlog() {
  const queryClient = useQueryClient();
  const { mutate: deleteBlog, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBlogApi,
    mutationKey: ['blogs'],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs'],
      });
    },
  });
  return { deleteBlog, isDeleting };
}
