import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  console.log(bigShoeImage, imgURL.bigShoe);
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl ">
        <img src={imgURL.thumbnail} />
      </div>
    </div>
  );
};

export default ShoeCard;
