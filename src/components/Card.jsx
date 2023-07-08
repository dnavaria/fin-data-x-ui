import React from "react";

const Card = (props) => {
  const { image_src, title, price, storage, user, send } = props;
  return (
    <div className="w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white"
        src={image_src}
        alt=""
      />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className="text-center text-4xl font-bold">${price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{storage}</p>
        <p className="py-2 border-b mx-8">{user}</p>
        <p className="py-2 border-b mx-8">{send}</p>
      </div>
      <button className="bg-logo w-[200px] rounded-md my-6 py-3 font-medium mx-auto text-xl text-black">
        Start Trial
      </button>
    </div>
  );
};

export default Card;
