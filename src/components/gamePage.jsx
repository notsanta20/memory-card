import { useState } from "react";
import randomArray from "./randomizeArray";
import Score from "./scores";
import GetImage from "./getImage";

function GamePage({ bestScore, handleScore, handleGameBtn }) {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [currScore, setCurrScore] = useState(0);
  const [cardClass, setCardClass] = useState(`card-container`);
  const [selected, setSelected] = useState(new Set());

  function handleImgClick(e) {
    setCardClass((c) => (c += ` flip`));
    const img = e.target.dataset.key;
    if (selected.has(img)) {
      handleGameBtn();
    }
    setTimeout(() => {
      if (!selected.has(img)) {
        setSelected((s) => s.add(img));

        //increase current score
        setCurrScore((s) => s + 1);

        //check and update best score
        if (currScore === bestScore) {
          handleScore();
        }

        //randomize the images
        let newArr = [...arr];
        randomArray(newArr);
        setArr(newArr);
      }
      setCardClass((c) => (c = `card-container`));
    }, 500);
  }

  return (
    <>
      <div className="m-5 flex flex-col gap-10">
        <Score curr={currScore} best={bestScore} />
        <GetImage
          arr={arr}
          handleImgClick={handleImgClick}
          cardClass={cardClass}
        />
      </div>
    </>
  );
}

export default GamePage;
