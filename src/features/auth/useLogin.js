import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginApi } from '../../services/apiAuthentication';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      toast.success('Welcome back!');
      navigate('/', { replace: true });
    },
  });
  return { login: mutate, isLoggingIn: isLoading };
}
