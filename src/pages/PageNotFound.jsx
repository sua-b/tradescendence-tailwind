import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex flex-col gap-9 justify-center items-center'>
      <div className='text-3xl'>Page Not Found</div>
      <Button color='red' size='medium' onClick={() => navigate('/')}>
        Back to homepage
      </Button>
    </div>
  );
}
