const inputStyles =
  'border border-solid border-gray-300 rounded-sm focus:outline-none leading-7 ';

const fileInput =
  'file:bg-gray-100 file:border file:border-solid file:border-gray-400 ';

export default function FormRow({
  label,
  name,
  type = 'text',
  errors,
  register,
}) {

  if (type === 'file')
    return (
      <div className='grid px-4 gap-1 grid-cols-[1fr_5fr] relative'>
        <label className='text-md lg:pl-10' htmlFor={name}>
          {label}
        </label>
        <input
          className={
            errors?.image
              ? fileInput + 'ring-2 ring-offset-1 ring-red-300'
              : fileInput
          }
          type='file'
          accept='image/*'
          id={name}
          {...register}
        />
      </div>
    );

  return (
    <div className='grid px-4 gap-1 grid-cols-[1fr_5fr] relative'>
      <label className='text-md lg:pl-10' htmlFor={name}>
        {label}
      </label>
      <input
        className={
          errors?.[name]
            ? inputStyles + 'ring-2 ring-offset-1 ring-red-300'
            : inputStyles
        }
        type={type}
        id={name}
        {...register}
      />
    </div>
  );
}
