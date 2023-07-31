import { RaceBy } from '@uiball/loaders';
import { screenW } from '../constant/screen';

export default function Spinner() {
  const width = screenW;

  return (
    <div className='py-[10rem] flex items-center justify-center'>
      <RaceBy size={width / 10} lineWeight={10} speed={1.4} color='black' />
    </div>
  );
}
