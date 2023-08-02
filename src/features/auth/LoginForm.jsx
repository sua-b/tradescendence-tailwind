import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import useLogin from './useLogin';
import useUser from '../auth/useUser';

export default function LoginForm() {
  const { login, isLogginIn } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit({ email, password }) {
    login({ email, password });
  }

  function onError(errors) {}

  return (
    <div className='bg-gray-100 rounded-xl w-60'>
      <Form handleSubmit={handleSubmit(onSubmit, onError)}>
        <label
          htmlFor='email'
          className={
            errors?.email
              ? 'after:content-["Enter_your_email"] after:px-2 after:text-xs after:text-red-500'
              : ''
          }
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          {...register('email', { required: 'Enter your email' })}
        />

        <label
          htmlFor='password'
          className={
            errors?.password
              ? 'after:content-["Enter_your_password"] after:px-2 after:text-xs after:text-red-500'
              : ''
          }
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          {...register('password', { required: 'Enter your password' })}
        />
        <Button color='blue' text='white' disabled={isLogginIn}>
          Log in
        </Button>
      </Form>
    </div>
  );
}
