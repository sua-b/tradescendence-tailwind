import { useNavigate } from 'react-router-dom';
import Header from '../ui/Header';
import Button from '../ui/Button';

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen bg-zinc-300 flex justify-center'>
      <div className='bg-white shadow-2xl md:w-11/12 max-w-screen-lg'>
        <Header />
        <div className='text-3xl text-center pt-20 flex flex-col justify-center items-center w-full '>
          <h2 className='mb-10'>Page Not Found</h2>

          <Button
            color='red'
            text='white'
            size='small'
            onClick={() => navigate('/')}
          >
            Back to homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
