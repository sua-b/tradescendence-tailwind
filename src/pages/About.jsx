export default function About() {
  return (
    <div className='p-4'>
      <h1 className='text-center text-2xl font-semibold pb-3'>About</h1>
      <p className='font-semibold'>What is this page?</p>
      <p className=''>
        First, this page is created for keeping articles related to personal
        development, self-improvement, devoloping a growth mindset, and
        overcoming struggles in life.
      </p>
      <p className=''>
        Second, investing and trading are my interests. I also want to keep
        quotes of one of the greatest stocks trader, Mark Minervini.
      </p>
      <blockquote className='italic px-5'>
        &quot; Mark Minervini is considered one of America's most successful
        stock traders; a veteran of Wall Street for more than 37 years. He is
        the author of the best-selling books Trade Like a Stock Market Wizard
        and Think and Trade Like a Champion &quot;
      </blockquote>
      <p className='mt-10'>Tech stack:</p>
      <ul>
        <li>React+Tailwindcss</li>
        <li>Supabase</li>
      </ul>
    </div>
  );
}
