import React from 'react';

export default function HeaderMini({ children }) {
  return (
    <div className='grid grid-cols-[auto_1fr] mt-2 mx-2 mb-4'>
      <div className='h-8 p-1 px-2 text-sm tracking-wide  text-white bg-fuchsia-700 '>
        {children}
      </div>
      <div className='h-2 w-full bg-fuchsia-700 self-end'></div>
    </div>
  );
}
