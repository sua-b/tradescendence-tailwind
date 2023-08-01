import { useState } from 'react';
import { useForm } from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';
import Button from '../ui/Button';
import HeaderMini from '../ui/HeaderMini';

import useAddBlog from '../features/manage/useAddBlog';
const inputStyles =
  'border border-solid border-gray-300 rounded-sm focus:outline-none leading-7 ';
const inputRowStyles = 'grid px-4 gap-1 grid-cols-[1fr_5fr] relative';

export default function AddForm() {
  const [value, setValue] = useState('');
  // ต้องรับ isLoading + add Function มา
  const { addBlog, isAdding } = useAddBlog();
  //^^^^^^^^^

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    // addBlog({ ...data, content: value });
    // reset;
  }

  function onError(errors) {
    // console.log(errors);
  }

  function onReset() {
    reset;
    setValue('');
  }

  if (isAdding) return <Spinner />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className='bg-gray-100 py-1 flex flex-col gap-2 '
    >
      <HeaderMini color='emerald'>Add Blog</HeaderMini>

      <div className={inputRowStyles}>
        <label className='text-md lg:pl-10' htmlFor='title'>
          Title
        </label>
        <input
          className={
            errors?.title
              ? inputStyles + 'ring-2 ring-offset-1 ring-red-300'
              : inputStyles
          }
          type='text'
          id='title'
          {...register('title', {
            required: 'This field is required',
          })}
        />
      </div>

      <div className={inputRowStyles}>
        <label className='text-md lg:pl-10' htmlFor='author'>
          Author
        </label>
        <input
          className={
            errors?.author
              ? inputStyles + 'ring-2 ring-offset-1 ring-red-300'
              : inputStyles
          }
          type='text'
          id='author'
          {...register('author', { required: 'This field is required' })}
        />
      </div>

      <div className={inputRowStyles}>
        <label className='text-md lg:pl-10' htmlFor='content'>
          Content
        </label>
        <div className={!value && 'ring-2 ring-offset-1 ring-red-300'}>
          <MDEditor value={value} onChange={setValue} />
        </div>
      </div>

      <div className={inputRowStyles}>
        <label className='text-md lg:pl-10' htmlFor='label'>
          Label
        </label>
        <input
          className={
            errors?.label
              ? inputStyles + 'ring-2 ring-offset-1 ring-red-300'
              : inputStyles
          }
          type='text'
          id='label'
          placeholder=' Add category'
          {...register('label', { required: 'This field is required' })}
        />
      </div>

      <div className={inputRowStyles}>
        <label className='text-md lg:pl-10' htmlFor='image'>
          Image
        </label>
        <input
          className='file:bg-green-100 file:border file:border-solid file:border-green-400'
          type='file'
          accept='image/*'
          id='image'
          {...register('image', { required: 'This field is required' })}
        />
      </div>

      <div className='flex justify-center'>
        <Button type='submit' color='indigo' text='white'>
          Submit
        </Button>
        <Button type='reset' color='rose' text='white' onClick={onReset}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
