import Image from 'next/image';
import { useRiddles } from '../context';
import bday from './bday.png';
import qwest from './qwest.png';

export const SplashScreen = () => {
  const { goToRiddles } = useRiddles();
  return (
    <div className="splash-screen relative h-full flex flex-col items-stretch justify-center gap-8 overflow-hidden p-6">
      <Image className="big-image w-full" src={bday} alt="" width={200} height={100} />

      <Image
        className="absolute -bottom-10 -right-6 pointer-events-none"
        src={qwest}
        alt=""
        width={164}
      />

      <div className="relative py-12 text-6xl" onClick={goToRiddles}>
        <p className=" text-center font-bold z-0 absolute w-full rainbow-stroke tracking-widest">
          BEGIN!
        </p>
        <p className="relative rainbow-text text-center font-bold z-10 w-full no-stroke tracking-widest">
          BEGIN!
        </p>
        <p className="text-base text-shadow-white text-center">( Click me )</p>
      </div>
      <div className="relative flex items-center justify-center"></div>
    </div>
  );
};
