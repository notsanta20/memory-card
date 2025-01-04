import { useState, useEffect } from "react";
import randomArray from "./randomizeArray";
import Score from "./scores";
import GetImage from "./getImage";

const selectedImg = new Set();
const cards = document.querySelectorAll(`.card-container`);

function GamePage({ bestScore }) {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [currScore, setCurrScore] = useState(0);

  function handleImgClick(e) {
    for (let card of cards) {
      card.classList.add(`flip`);
    }
    const img = e.target.dataset.key;

    if (selectedImg.has(img)) {
      console.log(`test`);
    } else {
      selectedImg.add(img);

      //increase current score
      setCurrScore((s) => s + 1);

      //check and update best score
      if (currScore > bestScore) {
      }

      //randomize the images
      let newArr = [...arr];
      randomArray(newArr);
      setArr(newArr);
    }

    setTimeout(() => {
      for (let card of cards) {
        card.classList.remove(`flip`);
      }
    }, 2000);
  }

  return (
    <>
      <div className="m-5 flex flex-col gap-10">
        <Score curr={currScore} best={bestScore} />
        <GetImage arr={arr} handleImgClick={handleImgClick} />
      </div>
    </>
  );
}

export default GamePage;
