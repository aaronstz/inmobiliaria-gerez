import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Card = ({ title, location, imageUrl, price, id }) => {
  return (
    <>
      <div className="group h-full lg:h-[32rem] flex flex-wrap max-w-2xl m-2 md:m-4 lg:max-w-lg lg:max-h-md rounded border-solid border-2 border-slate-300 bg-slate-200 shadow-xl cursor-pointer hover:shadow-blue-500/25 duration-300">
        <a href={`/propiedades/${id}`}>
          <div className="h-4/6 lg:h-80">
            <img className="w-full h-full lg:h-80" src={imageUrl} alt={title} />
          </div>
          <div className="h-96">
            <div className="mt-2 mx-6 font-bold text-xl">{title}</div>
            <div className="lg:flex-nowrap flex-wrap">
              <p className="text-wrap mx-6 text-gray-700 text-lg md:text-base">
                {/* <FaMapMarkerAlt className=" text-gray-400" /> */}
                {location}. <br />
                <span className="font-bold">${price}</span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Card;
