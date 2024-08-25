import { useRef, useState } from 'react';
import { useRiddles } from '../context';

export const RiddlesScreen = () => {
  const { riddles } = useRiddles();
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [errorCount, setErrorCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const { id, question, hint, answer } = riddles[currentRiddleIndex];

  const handleOnSubmit = () => {
    const input = inputRef.current;
    if (!input) return;

    const userAnswer = input.value.trim().toLowerCase();

    if (userAnswer === answer.trim().toLowerCase()) {
      // alert(hint);
      setError(null);
      setErrorCount(0);
      setCurrentRiddleIndex(currentRiddleIndex + 1);
      input.value = '';
    } else {
      setErrorCount((prev) => prev + 1);
      setError('Wrong answer! Try again');
    }
  };

  return (
    <div className="riddles">
      <div className="flex flex-col items-center gap-4">
        {/* <Image src="/riddle.png" width={200} height={200} /> */}
        <h1 className="text-2xl font-bold">Riddle #{id + 1}</h1>
        <div className="text-lg">{question}</div>
        {error && <p className="text-red-500">{error}</p>}
        {errorCount > 3 && <p className="text-orange-500">{hint}</p>}
      </div>

      <div className="flex flex-col items-center gap-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Answer"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button className="p-2 bg-blue-500 text-white rounded-md" onClick={handleOnSubmit}>
          Submit!
        </button>
      </div>
    </div>
  );
};
