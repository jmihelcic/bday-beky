export const EndScreen = () => {
  return (
    <div className="end-screen h-full flex flex-col gap-4 text-shadow-white justify-center">
      <h1 className="text-5xl font-bold text-center">Congratulations!</h1>
      <p className="text-2xl font-bold text-center">
        You have completed the qwest and have earned a
      </p>
      <div className="relative py-12 text-6xl">
        <p className=" text-center font-bold z-0 absolute w-full rainbow-stroke tracking-widest">
          ANYTHING COUPON
        </p>
        <p className="relative rainbow-text text-center font-bold z-10 w-full no-stroke tracking-widest">
          ANYTHING COUPON
        </p>
      </div>

      <p className="text-2xl font-bold text-center">You can find it at your desk!</p>
      <p className="text-lg font-bold text-center">With love... Jaša ❤️</p>
    </div>
  );
};
