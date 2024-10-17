"use client";
import React, { useState } from "react";
import { RxDividerVertical } from "react-icons/rx";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCero, setCeroOpen] = useState(false);

const data = [
  ["Tipo de operación", "Alquiler", "Venta"],
  ["Inmueble", "Casa", "Depto", "Terreno"],
  ["Precio", "Ascendente", "Descendente"],
  ["ubicacion", "Concordia", "Buenos Aires", "CABA"]
];

  return (
    <div className="max-w-[900px] lg:m-auto lg:px-2 lg:py-12 lg:flex lg:flex-wrap lg:justify-between lg:shadow-xl">
      {data.map((e, index) => (
        <div key={index} className="cursor-pointer text-lg font-bold bg-gray-200  text-gray-500 flex items-center justify-between rounded-sm tracking-wider border-2 border-transparent active:border-gray-400 duration-300 active:text-gray-700 hover:text-gray-800 hover:shadow-xl hover:shadow-orange-200 m-4">
          <select
            onClick={() => setIsOpen((prev) => !prev)}
          > 
            <option value={index}>{e[0]}</option>
            <option value={index}>{e[1]}</option>
            <option value={index}>{e[2]}</option>
            {
              e[3] ? <option value={index}>{e[3]}</option> : undefined
            }
          </select>{" "}
          <RxDividerVertical />
        </div>
      ))}
    <button><IoSearchSharp className="text-xl text-gray-500 hover:text-black duration-300 lg:visible invisible"/></button>
    </div>
  );
};

export default Searchbar;
