import React from "react";

const Newletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black "
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-logo w-[200px] rounded-md  my-6 py-3 font-medium mx-auto text-xl text-black">
              Notfiy Me
            </button>
          </div>
          <p className="text-center">
            We care about the protection of your data. Read our{" "}
            <span className="text-logo">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
