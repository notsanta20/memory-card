import { useState } from "react";
import Start from "./components/startPage";
import GamePage from "./components/gamePage";
import End from "./components/endPage";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [page, setPage] = useState(`start`);

  function handleStartBtn() {
    setPage(`main`);
  }

  function handleGameBtn() {
    setPage(`end`);
  }

  function handleEndBtn() {
    setPage(`start`);
  }

  function handleBestScore(curr) {
    setBestScore((b) => b + 1);
  }

  if (page === `start`) {
    return <Start handleStartBtn={handleStartBtn} />;
  } else if (page === `main`) {
    return (
      <GamePage
        bestScore={bestScore}
        handleScore={handleBestScore}
        handleGameBtn={handleGameBtn}
      />
    );
  } else if (page === `end`) {
    return <End handleEndBtn={handleEndBtn} />;
  }
}

export default App;
