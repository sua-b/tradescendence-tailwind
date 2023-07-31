import React from 'react';

export default function HeaderMini({ children }) {
  return (
    <div className='grid grid-cols-[auto_1fr] mt-4 mx-4 mb-4'>
      <div className='h-8 p-1 px-2 text-sm tracking-wide  text-white bg-fuchsia-700 '>
        {children}
      </div>
      <div className='h-2 w-full bg-gradient-to-r from-fuchsia-700 to-indigo-500 self-end'></div>
    </div>
  );
}
