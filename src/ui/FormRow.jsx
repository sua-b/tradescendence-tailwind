export default function FormRow({ children, label }) {
  return (
    <div className='grid px-4 gap-1 grid-cols-[1fr_5fr] relative'>
      <label className='text-md lg:pl-10' htmlFor={children.props.name}>
        {label}
      </label>
      {children}
    </div>
  );
}
