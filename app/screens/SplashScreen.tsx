import Image from 'next/image';
import { useRiddles } from '../context';
import bday from './bday.png';
import under from './under.png';

export const SplashScreen = () => {
  const { goToRiddles } = useRiddles();
  return (
    <div className="splash-screen h-screen w-screen flex flex-col items-stretch justify-center gap-8">
      <Image
        className="big-image"
        src={bday}
        alt=""
        //  width={200}
        //  height={200}
      />
      <div className="relative flex items-center justify-center">
        <button
          onClick={() => {
            console.log('go to riddles');
            // goToRiddles();
          }}
          className="px-4 py-2 bg-white/85 text-black rounded-full text-lg"
        >
          Start your quest!
        </button>
        <Image
          src={under}
          alt=""
          //  height={200}
          className="absolute transform -translate-y-[60%] top-1/2"
        />
      </div>
    </div>
  );
};
