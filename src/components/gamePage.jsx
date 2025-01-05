import { useState, useEffect } from "react";
import randomArray from "./randomizeArray";
import Score from "./scores";
import GetImage from "./getImage";

const selectedImg = new Set();

function GamePage({ bestScore, handleScore, handleGameBtn }) {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [currScore, setCurrScore] = useState(0);
  const [cardClass, setCardClass] = useState(`card-container`);

  function handleImgClick(e) {
    setCardClass((c) => (c += ` flip`));
    const img = e.target.dataset.key;
    if (selectedImg.has(img)) {
      handleGameBtn();
    }
    setTimeout(() => {
      if (!selectedImg.has(img)) {
        selectedImg.add(img);

        //increase current score
        setCurrScore((s) => s + 1);

        //check and update best score
        if (currScore > bestScore) {
          console.log(currScore);
          handleScore(currScore);
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
