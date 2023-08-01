import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import FormMD from '../../ui/FormMD'
import Button from '../../ui/Button';

import useAddBlog from './useAddBlog';
import { useState } from 'react';

export default function AddForm() {
  const [mdText,setMdText] = useState('')
  const { addBlog, isAdding } = useAddBlog();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // console.log({ ...data, content: mdText });
    addBlog({ ...data, content: value });
  }

  function onError(errors) {
    // console.log(errors);
  }

  function onReset(){
    reset();
    setMdText('')
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit, onError)}>

      <FormRow label='Title' name='title' type='text' errors={errors} register={...register('title',{required:'This field is required'})}/>

      <FormRow label='Author' name='author' type='text' errors={errors} register={...register('author',{required:'This field is required'})}/>

      <FormRow label='Label' name='label' type='text' errors={errors} register={...register('label',{required:'This field is required'})}/>

      <FormRow label='Image' name='image' type='file' errors={errors} register={...register('image',{required:'Please choose an image'})}/>

      <FormMD label='Content' name='content' mdText={mdText} setMdText={setMdText}/>
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
