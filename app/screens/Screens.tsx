'use client';

import { useRiddles } from '../context';
import { EndScreen } from './EndScreen';
import { RiddlesScreen } from './RiddlesScreen';
import { SplashScreen } from './SplashScreen';

export const Screens = () => {
  const { currentScreen } = useRiddles();

  return (
    <div className="all-screens h-full">
      {currentScreen === 'splash' && <SplashScreen />}
      {currentScreen === 'riddles' && <RiddlesScreen />}
      {currentScreen === 'end' && <EndScreen />}
    </div>
  );
};
