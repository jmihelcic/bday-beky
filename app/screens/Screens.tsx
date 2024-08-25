'use client';

import { useRiddles } from '../context';
import { RiddlesScreen } from './RiddlesScreen';
import { SplashScreen } from './SplashScreen';

export const Screens = () => {
  const { riddles, currentScreen } = useRiddles();

  return (
    <div className="min-h-screen">
      {currentScreen === 'splash' && <SplashScreen />}
      {currentScreen === 'riddles' && <RiddlesScreen />}
    </div>
  );
};
