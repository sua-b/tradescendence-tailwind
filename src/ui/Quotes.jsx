import quotes from '../data/markquotes';

export default function Quotes() {
  const filter = quotes.filter((item, index) => item.id < 5);

  return (
    <div className='font-semibold '>
      <h2 className='text-base tracking-tight text-red-800'>
        Mark Minervini's quotes
      </h2>
      <ul className='text-xs divide-y divide-solid tracking-wide leading-5 divide-black '>
        {filter.map((item, index) => (
          <li key={item.id} className='py-1'>
            &quot;{item.content}&quot;
          </li>
        ))}
      </ul>
    </div>
  );
}
