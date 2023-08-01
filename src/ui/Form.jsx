export default function Form({ handleSubmit, children }) {
  return (
    <form
      onSubmit={handleSubmit}
      className='bg-gray-100 pt-2 mx-4 flex flex-col gap-2 '
    >
      {children}
    </form>
  );
}
