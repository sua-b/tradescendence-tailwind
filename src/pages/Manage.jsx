import HeaderMini from '../ui/HeaderMini';

import AddForm from '../features/manage/AddForm';

export default function Manage() {
  return (
    <div className='h-full'>
      {/* Add Tab selection */}
      <HeaderMini>Add Blog</HeaderMini>
      <AddForm />
    </div>
  );
}
