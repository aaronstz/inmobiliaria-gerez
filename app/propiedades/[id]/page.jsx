
import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImageSlider from "../../components/ImageSlider";
import { BiBath, BiBed, BiArea } from "react-icons/bi";
import Link from "next/link";

import { NextResponse } from "next/server";
import properties from "../../api/propiedades/data"; // Importamos las propiedades desde el archivo compartido


export default function page({params}) {
  const { id } = params;
  
  // Buscar la propiedad por su ID
  const property = properties.find((prop) => prop.id === parseInt(id));
  if (!property) {
    return NextResponse.json({ error: "Property not found" }, { status: 404 });
  }
  //

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14 ">
        <Navbar />
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between m-2">
          <div>
            {/* <h2 className="text-2xl font-semibold ">{property.title}</h2> */}
            <h3 className="text-lg mb-4 font-bold">{property.location}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-violet-500 text-white px-8 rounded-full ml-8">
              {property.type.toUpperCase()}
            </div>
            {/* <div className="bg-indigo-500 text-white px-3 rounded-full">
              {property.location}, PROVINCIA
            </div> */}
          </div>
          <div className="text-3xl font-semibold text-gray-600">
            ${property.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <ImageSlider images={property.images} alt={property.description} />
            </div>
            <div className="flex gap-x-6 mb-6 ">
              <div className="flex gap-x-2 items-center ">
                <BiBed className="text-2xl" />
                <div>{property.basic_information.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center ">
                <BiBath className="text-2xl" />
                <div>{property.basic_information.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center ">
                <BiArea className="text-2xl" />
                <div>{property.total_surface}m°2</div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8 ">
              <div className="w-[110px] h-full">
                <img
                  src={property.agent.image}
                  alt="IMAGEN DEL VENDEDOR"
                />
              </div>
              <div>
                <div className="font-bold text-lg ">{property.agent.name}</div>
                {/* <Link href="" className="text-blue-400 text-sm">
                  Ver propiedades del agente
                </Link> */}
              </div>
            </div>
            <form className="flex flex-col gap-y-4 ">
              {/* <input
                className="border border-gray-300 focus:border-blue-400 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Nombre"
              />
              <input
                className="border border-gray-300 focus:border-blue-400 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email"
              />
              <input
                className="border border-gray-300 focus:border-blue-400 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Teléfono"
              />
              <textarea
                className="border border-gray-300 focus:border-blue-400 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                placeholder={`Hola, estoy interesado/a en ${property.description}`}
              ></textarea> */}
            <div>{property.description}</div>
              <div className="flex gap-x-2">
                  <Link href = 'https://wa.link/juq3ad' className="bg-blue-400 hover:bg-blue-600 text-white rounded p-4 text-sm w-full transition" replace={false}>
                  Quiero saber más
                  </Link>
              </div>
            </form>
          </div>
        </div>
       
      </div>
      <Footer />
    </section>
  );
}
