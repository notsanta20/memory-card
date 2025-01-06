function Score({ curr, best }) {
  return (
    <>
      <div className="score flex justify-center lg:justify-end gap-10 font-semibold text-lg md-text-xl">
        <div className="curr px-3 py-2 rounded-md">Current Score - {curr}</div>
        <div className="best px-3 py-2 rounded-md">Best Score - {best}</div>
      </div>
    </>
  );
}

export default Score;
