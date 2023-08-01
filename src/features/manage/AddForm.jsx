import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import FormMD from '../../ui/FormMD';
import Button from '../../ui/Button';

import useAddBlog from './useAddBlog';
import { useState } from 'react';

export default function AddForm() {
  const [mdText, setMdText] = useState('');
  const { addBlog, isAdding } = useAddBlog();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // console.log({ ...data, content: mdText });
    // addBlog({ ...data, content: value });
  }

  function onError(errors) {
    // console.log(errors);
  }

  function onReset() {
    reset();
    setMdText('');
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='Title'>
        <input
          type='text'
          id='title'
          {...register('title', { required: 'This field is required' })}
          className={errors?.title && 'ring-2 ring-offset-1 ring-red-300'}
        />
      </FormRow>

      <FormRow label='Author'>
        <input
          type='text'
          id='author'
          {...register('author', { required: true })}
          className={errors?.author && 'ring-2 ring-offset-1 ring-red-300'}
        />
      </FormRow>
      <FormRow label='Label'>
        <input
          type='text'
          id='label'
          {...register('label', { required: true })}
          className={errors?.label && 'ring-2 ring-offset-1 ring-red-300'}
        />
      </FormRow>

      <FormRow label='Image'>
        <input
          type='file'
          id='image'
          {...register('image', { required: true })}
          className={
            errors?.image &&
            'after:content-["Image_is_required"] after:text-red-500 after:text-xs after:ml-4'
          }
        />
      </FormRow>

      <FormMD
        label='Content'
        name='content'
        mdText={mdText}
        setMdText={setMdText}
      />

      <div className='flex justify-center'>
        <Button
          type='submit'
          color='teal'
          size='small'
          text='white'
          disabled={isAdding}
        >
          Submit
        </Button>
        <Button
          type='reset'
          color='red'
          size='small'
          text='white'
          onClick={onReset}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
}
