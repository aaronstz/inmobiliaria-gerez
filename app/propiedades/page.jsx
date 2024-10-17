import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import ImageSlider from "../components/ImageSlider";
import { getProperties } from "../actions";
import Card from "../components/Card";
import { FaMapMarkerAlt } from "react-icons/fa";
import CarouselDefault from "../components/CarouselDefault";
import Link from "next/link";
import properties from "../api/propiedades/data";

const page = async () => {
  return (
    <div>
      <Navbar />
      <CarouselDefault url="https://images.unsplash.com/photo-1704207525603-9961bd5281e0?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      {/* <Searchbar /> */}
      <div className="lg:flex lg:justify-center lg:ml-40">
        <div className="grid grid-cols-1 lg:mr-40 lg:max-h-md m-4 max-h-sm max-w-lg lg:max-w-screen-2xl md:max-h-lg md:max-w-screen-md">
          <h1 className="font-serif text-2xl ml">Nuestras propiedades:</h1>
          <hr className="h-[2px] w-24 bg-gray-200 border-0 dark:bg-gray-500" />
          {properties.map((e) => (
            <div>
              <Link href={`/propiedades/${e.id}`}>
                <div className="grid grid-cols-1 lg:flex md:flex gap-2 mt-4 lg:mt-10 md:mt-8 group cursor-pointer">
                  <div className="lg:m-8 lg:p-8 lg:w-full lg:h-96 md:max-w-[30rem]">
                    <img
                      src={e.images[0]}
                      alt={e.title}
                      className="lg:h-full lg:w-[40rem] group-hover:border md:h-full"
                    />
                  </div>
                  <div className="lg:w-full">
                    <div className="lg:ml-10 lg:gap-2 lg:mt-16 md:ml-6">
                      <h1 className="lg:w-80 w-40 font-semibold  text-gray-700 text-2xl ">{e.type} en {e.transaction.toLowerCase()}</h1>
                      <div className="flex gap-2">
                      <FaMapMarkerAlt className="text-gray-400 mt-2 " />
                      <h1 className="font-semibold  text-gray-700 text-xl ">
                        {e.location}.
                      </h1>
                      <h2 className="font-bold text-xl top-0">
                        ${e.price}
                      </h2>
                      </div>
                        <br />
                        <div>
                        <span className="font-light text-base">
                          {e.description}.
                        </span>
                        </div>
                      
                    </div> 
                  </div>
                </div>
              </Link>
              <hr className="h-[3px] w-full mt-2 lg:mt-0 lg:ml-16 lg:w-full md:ml-6 border-0 dark:bg-gray-300 md:mt-4" />

            </div>
          ))}
        </div>
      </div>
      {/* <Pagination /> */}
      <Footer />
    </div>
  );
};

export default page;
