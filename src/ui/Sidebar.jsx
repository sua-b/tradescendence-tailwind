import { Parser } from "html-to-react";

export default function Sidebar() {
  return (
    <aside className='bg-gray-200 row-start-3 md:row-start-2 md:col-start-2'>
      <div className='m-12'>sidebar</div>
      {Parser().parse()}
    </aside>
  );
}


//sort author 