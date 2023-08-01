import MDEditor from '@uiw/react-md-editor';

export default function FormMD({ mdText, setMdText, label, name }) {
  return (
    <div className='grid px-4 gap-1 grid-cols-[1fr_5fr]'>
      <label className='text-md lg:pl-10' htmlFor={name}>
        {label}
      </label>
      <div>
        <MDEditor value={mdText} onChange={setMdText} />
      </div>
    </div>
  );
}
