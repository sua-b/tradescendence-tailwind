import { useNavigate } from 'react-router-dom';
import LoginForm from '../features/auth/LoginForm';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

export default function Login() {
  const navigate = useNavigate();
  return (
    <main className='min-h-screen flex justify-center bg-zinc-300'>
      <div className='md:w-11/12 max-w-screen-lg min-h-screen flex flex-col justify-center items-center bg-white'>
        <Button onClick={() => navigate('/')}>&larr;back</Button>
        <Logo src={'/logo-200.png'} className='h-40' />
        <LoginForm />
      </div>
    </main>
  );
}
