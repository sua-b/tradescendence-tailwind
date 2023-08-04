export default function About() {
  const tag = 'text-sm bg-blue-100 rounded-full px-2 ring';
  return (
    <div className='p-12'>
      <h1 className='text-center text-2xl font-semibold pb-3'>About</h1>
      <p className='font-semibold'>What is this page?</p>
      <p className=''>
        This page is created for keeping articles related to personal
        development, self-improvement, developing a growth mindset, overcoming
        struggles in life, investing, and trading.
      </p>

      <div className='my-3 px-2 bg-red-200 ring ring-red-400 rounded-full w-fit'>
        Tech stack:
      </div>
      <ul className='flex gap-2 my-2'>
        <li className={tag}>React</li>
        <li className={tag}>Tailwindcss</li>
        <li className={tag}>Supabase</li>
      </ul>
      <div className='my-3 px-2 bg-yellow-100 ring ring-yellow-400 rounded-full w-fit'>
        Extra packages
      </div>
      <ul className='flex flex-wrap gap-2 my-2'>
        <li className={tag}>react-hook-form</li>
        <li className={tag}>react-hot-toast</li>
        <li className={tag}>@tanstack/react-query</li>
        <li className={tag}>@uiball/loaders</li>
        <li className={tag}>@uiw/react-md-editor</li>
      </ul>
    </div>
  );
}
