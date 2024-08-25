import { useRef, useState } from 'react';
import { useRiddles } from '../context';
import classNames from 'classnames';

export const RiddlesScreen = () => {
  const { riddles, currentRiddleIndex, setCurrentRiddleIndex, goToEnd, isLastRiddle } =
    useRiddles();

  const [error, setError] = useState<string | null>(null);
  const [errorCount, setErrorCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const { riddle, answer, room } = riddles[currentRiddleIndex] ?? {};

  const handleOnSubmit = () => {
    const input = inputRef.current;
    if (!input) return;

    const userAnswer = input.value.trim().toLowerCase().replaceAll(' ', '');
    const riddleAnswer = answer.trim().toLowerCase().replaceAll(' ', '');

    if (userAnswer === riddleAnswer) {
      // alert(hint);
      setError(null);
      setErrorCount(0);
      if (isLastRiddle) {
        goToEnd();
        return;
      }
      setCurrentRiddleIndex(currentRiddleIndex + 1);
      input.value = '';
    } else {
      setErrorCount((prev) => prev + 1);
      setError('Wrong answer! Try again');
    }
  };

  return (
    <div className="riddles-screen relative h-full flex flex-col justify-center text-2xl p-6">
      <div className="flex flex-col items-center justify-center gap-4 flex-1">
        <div className="flex flex-col gap-4 text-shadow-white text-3xl font-bold text-center">
          {riddle}
        </div>
      </div>

      <div className="h-20">
        {error && <div className="text-red-500 text-shadow-white text-center p-4">{error}</div>}
      </div>

      <div className="flex flex-row items-center gap-3">
        <input
          key={errorCount}
          ref={inputRef}
          type="text"
          placeholder="What could it be?"
          className={classNames(
            'px-4 h-14 leading-[56px] border-4 border-black rounded-lg focus:outline-none text-xl flex-1',
            { 'wrong-answer': error !== null }
          )}
        />
        <button
          className={classNames(
            'h-14 w-14 leading-[56px] bg-black text-white rounded-md flex-shrink-0'
          )}
          onClick={handleOnSubmit}
        >
          GO
        </button>
      </div>

      <div
        className="new-room p-10 bg-white rounded-lg shadow-md text-center flex flex-col"
        key={room}
      >
        <p className="text-gray-600">New room unlocked!</p>
        <p className="text-5xl mt-6">{room}</p>
        <p className="text-lg text-gray-400">(go there)</p>
      </div>
    </div>
  );
};
