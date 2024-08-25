import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { riddles } from './_data/riddles';

export const RiddlesContext = createContext<{
  riddles: typeof riddles;
  currentRiddleIndex: number;
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
  setCurrentRiddleIndex: (index: number) => void;
} | null>(null);
export default RiddlesContext;

export const useRiddles = () => {
  const { riddles, currentRiddleIndex, currentScreen, setCurrentScreen, setCurrentRiddleIndex } =
    useContext(RiddlesContext)!;

  const goToRiddles = () => setCurrentScreen('riddles');
  const goToEnd = () => setCurrentScreen('end');
  const isLastRiddle = currentRiddleIndex === riddles.length - 1;

  return {
    riddles,
    currentRiddleIndex,
    currentScreen,
    setCurrentScreen,
    setCurrentRiddleIndex,
    goToRiddles,
    goToEnd,
    isLastRiddle,
  };
};

export const RiddlesProvider = (props: PropsWithChildren) => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);

  const contextValue = {
    riddles,
    currentRiddleIndex,
    currentScreen,
    setCurrentScreen,
    setCurrentRiddleIndex,
  };

  return <RiddlesContext.Provider value={contextValue}>{props.children}</RiddlesContext.Provider>;
};
