import { useQuery } from '@tanstack/react-query';
import { userStatusApi } from '../../services/apiAuthentication';

export default function useUser() {
  const { data: getUser, isLoading } = useQuery({
    queryFn: userStatusApi,
    queryKey: ['user'],
  });

  return {
    getUser,
    isLoading,
    isAuthenticated: getUser?.role === 'authenticated',
  };
}
