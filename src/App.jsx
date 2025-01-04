import GamePage from "./components/gamePage";

function App() {
  let bestScore = 0;
  return (
    <>
      <GamePage bestScore={bestScore} />
    </>
  );
}

export default App;
