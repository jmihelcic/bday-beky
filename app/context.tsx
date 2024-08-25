import { createContext, PropsWithChildren, useContext, useState } from 'react';

const riddles = [
  {
    id: 0,
    question: <div>Quesiton 1</div>,
    hint: `hint 1`,
    answer: `answer 1`,
  },
  {
    id: 1,
    question: <div>Quesiton 2</div>,
    hint: `hint 2`,
    answer: `answer 2`,
  },
  {
    id: 2,
    question: <div>Quesiton 3</div>,
    hint: `hint 3`,
    answer: `answer 3`,
  },
  {
    id: 3,
    question: <div>Quesiton 4</div>,
    hint: `hint 4`,
    answer: `answer 4`,
  },
  {
    id: 4,
    question: <div>Quesiton 5</div>,
    hint: `hint 5`,
    answer: `answer 5`,
  },
];

export const RiddlesContext = createContext<{
  riddles: typeof riddles;
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
} | null>(null);
export default RiddlesContext;

export const useRiddles = () => {
  const { riddles, currentScreen, setCurrentScreen } = useContext(RiddlesContext)!;

  const goToRiddles = () => setCurrentScreen('riddles');

  return { riddles, currentScreen, setCurrentScreen, goToRiddles };
};

export const RiddlesProvider = (props: PropsWithChildren) => {
  const [currentScreen, setCurrentScreen] = useState('splash');

  const contextValue = {
    riddles,
    currentScreen,
    setCurrentScreen: (value: string) => {
      console.log('setting screen to', value);
      setCurrentScreen('riddles');
    },
  };

  return <RiddlesContext.Provider value={contextValue}>{props.children}</RiddlesContext.Provider>;
};
