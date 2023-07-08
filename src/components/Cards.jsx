
import card_data from "../data/card_data";
import Card from "./Card";


const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {
          card_data.map((card) => (
            <Card
              key={card.id}
              image_src={card.img}
              title={card.title}
              price={card.price}
              storage={card.storage}
              user={card.user}
              send={card.send}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Cards;
