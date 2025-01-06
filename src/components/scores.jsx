function Score({ curr, best }) {
  return (
    <>
      <div className="score flex justify-center lg:justify-end gap-10 font-semibold text-xl">
        <div className="curr">Current Score - {curr}</div>
        <div className="best">Best Score - {best}</div>
      </div>
    </>
  );
}

export default Score;
