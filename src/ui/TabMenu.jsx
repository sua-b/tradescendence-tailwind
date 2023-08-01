export default function TabMenu({ activeTab, setActiveTab }) {
  return (
    <div className='grid grid-cols-2 justify-center text-center text-lg h-8 '>
      <button
        className={activeTab === '2' ? 'bg-zinc-300' : 'font-bold'}
        onClick={() => setActiveTab('1')}
      >
        Add
      </button>
      <button
        className={activeTab === '1' ? 'bg-zinc-300' : 'font-bold'}
        onClick={() => setActiveTab('2')}
      >
        Delete
      </button>
    </div>
  );
}
