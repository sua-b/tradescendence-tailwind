import HeaderMini from '../ui/HeaderMini';
import TabMenu from '../ui/TabMenu';
import AddForm from '../features/manage/AddForm';
import { useState } from 'react';
import DeleteTable from '../features/manage/DeleteTable';

export default function Manage() {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <>
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === '1' && (
        <>
          <HeaderMini color='emerald'>Add Blog</HeaderMini>
          <AddForm />
        </>
      )}
      {activeTab === '2' && (
        <>
          <HeaderMini color='rose'>Delete Blog</HeaderMini>
          <DeleteTable />
        </>
      )}
    </>
  );
}
