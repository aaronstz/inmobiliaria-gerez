"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CarouselDefault from "./components/CarouselDefault";
import Searchbar from "./components/Searchbar";
import { getProperties } from "./actions";
import { GET } from "./api/propiedades/route";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Home = () => {
  // const properties = await getProperties();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/propiedades");
        const data = await res.json();
        setProperties(data)
      } catch (err) {
        console.error(err);
      }
    };
    fetchProperties();
  }, []);

  return (
    <>
      <Navbar />
      <CarouselDefault url="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      {/* <Searchbar /> */}
      <div className="flex m-6 text-gray-700 justify-center text-2xl font-display font-semibold ">
        Nuestras propiedades:
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-2 mt-2 lg:m-4 ">
        {properties.map((e) => (
          <Card
            title={e.description}
            location={e.location}
            imageUrl={e.images[0]}
            price={e.price}
            id={e.id}
            key={e.id}
          />
        ))}
      </div>
      <div className="flex m-6 text-gray-500 justify-center text-2xl font-semibold hover:font-bold hover:text-black duration-300">
        <Link href="/propiedades">Ver todas nuestras propiedades</Link>
      </div>
      <Footer />
    </>
  );
}

export default Home;
