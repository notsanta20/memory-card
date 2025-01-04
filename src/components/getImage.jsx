function GetImage({ arr, handleImgClick }) {
  return (
    <>
      <div className="flex justify-evenly">
        {arr.map((num) => {
          return (
            <div className="img-container">
              <div className="card-container">
                <div className="card-back">
                  <img
                    src={`../src/assets/images/${num}.jpg`}
                    alt=""
                    key={num}
                    data-key={num}
                    onClick={handleImgClick}
                  />
                </div>
                <div className="card-front">front</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GetImage;
