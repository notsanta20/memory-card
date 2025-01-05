function End({ handleEndBtn }) {
  return (
    <>
      <div className="end-container flex flex-col gap-10 justify-center items-center">
        <h2 className="text-3xl font-bold">Game Over</h2>
        <span
          className="text-xl font-semibold cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-md"
          onClick={handleEndBtn}
        >
          Play Again
        </span>
      </div>
    </>
  );
}

export default End;
