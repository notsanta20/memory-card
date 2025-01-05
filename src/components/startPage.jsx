function Start({ handleStartBtn }) {
  return (
    <>
      <div className="start-container flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl font-bold">Memory Card Game</h1>
        <span
          className="text-xl font-semibold cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-md"
          onClick={handleStartBtn}
        >
          Start Game
        </span>
      </div>
    </>
  );
}

export default Start;
