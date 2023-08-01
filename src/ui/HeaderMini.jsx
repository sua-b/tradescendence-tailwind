import { colors } from '../constant/bg-color';

export default function HeaderMini({ children, color }) {
  if (color)
    return (
      <div className='grid grid-cols-[auto_1fr] mt-4 m-4 mb-4 text-white text-sm tracking-wide'>
        <div className={`h-7 py-1 px-2 ${colors[color]}`}>{children}</div>
        <div className={`h-2 w-full self-end ${colors[color]}`}></div>
      </div>
    );

  return (
    <div className='grid grid-cols-[auto_1fr] mt-4 mx-4 mb-4 text-white text-sm tracking-wide'>
      <div className='h-8 py-1 px-2 bg-black'>{children}</div>
      <div className='h-2 w-full self-end bg-black'></div>
    </div>
  );
}
