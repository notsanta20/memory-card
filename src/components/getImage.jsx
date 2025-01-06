function GetImage({ arr, handleImgClick, cardClass }) {
  return (
    <>
      <div className="game-container">
        {arr.map((num) => {
          return (
            <div className="img-container">
              <div className={cardClass}>
                <div className="card-back">
                  <img
                    src={`./images/${num}.png`}
                    alt=""
                    data-key={num}
                    onClick={handleImgClick}
                    className="imgs"
                  />
                </div>
                <div className="card-front">
                  <img src="./images/back.png" alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GetImage;
