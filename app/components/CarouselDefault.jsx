"use client"
import React, { useState } from "react";


const CarouselDefault = ({ url, url2, url3 }) => {


  return (
    <div className="max-w[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
        <div
          style={{ backgroundImage: `url(${url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        />
    </div>
  );
};

export default CarouselDefault;
