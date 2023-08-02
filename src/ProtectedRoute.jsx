import { useNavigate } from 'react-router-dom';
import useUser from './features/auth/useUser';
import { useEffect } from 'react';
import Spinner from './ui/Spinner';

export default function ProtectedRoute({ children }) {
  const { getUser, isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}
