import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LogoutApi } from '../../services/apiAuthentication';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: LogoutApi,

    onSuccess: () => {
      queryClient.removeQueries(['user']);
      toast.success('See ya!');
      navigate('/', { replace: true });
    },

    onError: (err) => {
      throw new Error(err.message);
    },
  });
  return { logout, isLoading };
}
