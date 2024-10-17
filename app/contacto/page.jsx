import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import ImageSlider from "../components/ImageSlider";

const page = () => {
  const Images = [
    "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/CCC.png?alt=media&token=ac3709bf-bc58-4f31-8d36-f0179d46657d",
    "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/SG.jpg?alt=media&token=da948d0b-90c8-483e-b958-5f8b877e7156",
    "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/ac%20png.png?alt=media&token=41b9d0a2-f194-4d96-9a03-de952c669003",
  ];

  return (
    <section>
      <Navbar />
      <div className="container min-h-screen lg:px-28 lg:py-5 relative">
        <div className="lg:mt-24 lg:max-w-xl m-4">
          <h1 className="text-6xl font-semibold leading-normal">
            Líderes
            <br />
            en el mercado{" "}
            <span className="font-light underline">inmobiliario</span>.
          </h1>
          <p>
          Nuestros profesionales colaboran para ofrecer servicios completos, desde la captación de propiedades y negociación con clientes, hasta el asesoramiento en financiamiento y la promoción de inmuebles. Con un enfoque en la atención personalizada y el conocimiento del mercado local, trabajamos para facilitar transacciones inmobiliarias exitosas.
          </p>

          <div className="mt-10 flex h-16 items-center ">
                  <Link href = 'https://wa.link/juq3ad' className="bg-yellow-300 py-3 px-8 font-medium inline-block mr-4 hover:bg-blue-400 hover:text-white duration-300" replace={false}>
                  Contactate con nosotros
                  </Link>
            <a href="/" className="hover:underline duration-300">
              Volvé a nuestras propiedades
            </a>
          </div>
        </div>
        <div>
          <img
            src={Images[0]}
            className="w-full h-full xl:absolute xl:left-[600px] xl:w-10/12 xl:top-20 bottom-0 right-20 "
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
