import { RaceBy } from '@uiball/loaders';

export default function Spinner() {
  const width = window.innerWidth;

  return (
    <div className='py-[10rem] flex items-center justify-center'>
      <RaceBy size={width / 10} lineWeight={10} speed={1.4} color='black' />
    </div>
  );
}
