import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-logo font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            eveniet tempora non numquam debitis voluptas, dignissimos libero
            animi laudantium a necessitatibus provident sapiente amet quae saepe
            magnam ea soluta repudiandae.
          </p>
          <button className="bg-base w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 font-medium text-xl text-logo">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
