import { useForm } from 'react-hook-form';
import Button from './Button';
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';

export default function Form({ onFunc }) {
  const [value, setValue] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    onFunc({ ...data, content: value });
    // reset;
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className='py-10 px-16 bg-gray-100 border border-solid border-gray-200 rounded-md'
    >
      <div className='grid items-center grid-cols-[1fr_3fr_0.5fr] gap-5 py-2 px-0 first:pt-0 last:pb-0'>
        <label className='font-semibold text-lg' htmlFor='title'>
          Title
        </label>
        <input
          className='input'
          type='text'
          id='title'
          {...register('title', { require: 'This field is required' })}
        />
        {!errors && <span>Error</span>}
      </div>
      <div className='grid items-center grid-cols-[1fr_3fr_0.5fr] gap-5 py-2 px-0 first:pt-0 last:pb-0'>
        <label className='font-semibold text-lg' htmlFor='author'>
          Author
        </label>
        <input
          className='input'
          type='text'
          id='author'
          {...register('author', { require: 'This field is required' })}
        />
        {!errors && <span>Error</span>}
      </div>
      <div className='grid items-center grid-cols-[1fr_3fr_0.5fr] gap-5 py-2 px-0 first:pt-0 last:pb-0'>
        <label className='font-semibold text-lg' htmlFor='content'>
          Content
        </label>
        <MDEditor value={value} onChange={setValue} />

        {/* 
        <textarea
          className='textarea '
          type='text'
          id='content'
          {...register('content', { require: 'This field is required' })}
        />
        {!errors && <span>Error</span>} */}
      </div>

      <div className='grid items-center grid-cols-[1fr_3fr_0.5fr] gap-5 py-2 px-0 first:pt-0 last:pb-0'>
        <label className='font-semibold text-lg' htmlFor='label'>
          Label
        </label>
        <input
          className='input'
          type='text'
          id='label'
          placeholder='Trading / Self-improvement / '
          {...register('label', { require: 'This field is required' })}
        />
        {!errors && <span>Error</span>}
      </div>
      <div className='grid items-center grid-cols-[1fr_3fr_0.5fr] gap-5 py-2 px-0 first:pt-0 last:pb-0'>
        <label className='font-semibold text-lg' htmlFor='image'>
          Image
        </label>
        <input
          className='input'
          type='file'
          accept='image/*'
          id='image'
          {...register('image', { require: 'This field is required' })}
        />
        {!errors && <span>Error</span>}
      </div>
      <div className='flex justify-center'>
        <Button color='teal'>Submit</Button>
        <Button type='reset' color='red' onClick={() => reset()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
