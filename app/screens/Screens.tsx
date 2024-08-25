'use client';

import { useRiddles } from '../context';
import { EndScreen } from './EndScreen';
import { RiddlesScreen } from './RiddlesScreen';
import { SplashScreen } from './SplashScreen';

export const Screens = () => {
  const { currentScreen } = useRiddles();

  return (
    <div className="all-screens min-h-screen h-full p-6">
      {currentScreen === 'splash' && <SplashScreen />}
      {currentScreen === 'riddles' && <RiddlesScreen />}
      {currentScreen === 'end' && <EndScreen />}
    </div>
  );
};
