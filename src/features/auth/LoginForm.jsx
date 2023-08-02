import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import useLogin from './useLogin';

export default function LoginForm() {
  const { login, isLogginIn } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit({ email, password }) {
    login({ email, password });
  }

  function onError(errors) {}

  return (
    <div className='bg-gray-100 ring ring-gray-300 rounded-xl w-60'>
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
          className='rounded-full ring ring-gray-200 focus:outline-none px-3'
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
          className='rounded-full ring ring-gray-200 focus:outline-none px-3'
        />
        <button
          color='blue'
          text='white'
          disabled={isLogginIn}
          className='rounded-full bg-emerald-600 hover:bg-emerald-700 my-3 text-white w-32 self-center'
        >
          Log in
        </button>
      </Form>
    </div>
  );
}
