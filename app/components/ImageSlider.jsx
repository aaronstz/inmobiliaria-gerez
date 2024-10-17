"use client";
import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = ({images, alt}) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    const isFirst = current === 0;
    const newIndex = isFirst ? images.length - 1 : current - 1;
    setCurrent(newIndex);
  };
  const next = () => {
    const isLast = current === images.length - 1;
    const newIndex = isLast ? 0 : current + 1;
    setCurrent(newIndex);
  };
  const goToSlide = (index) => {
    setCurrent(index);
  };
  return (
    <div className=" relative group">
      <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-gray-300 hover:text-white cursor-pointer">
        <BsChevronLeft onClick={prev} />
      </div>
      <img src={images[current]} alt={alt} className="duration-500"/>
      <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-gray-300 hover:text-white cursor-pointer">
        <BsChevronRight onClick={next} />
      </div>
      <div className="flex top-4 justify-center py-2 ">
        {images.map((slide, index) =>(
          <div className="text-2xl cursor-pointer " key={index} onClick={() => goToSlide(index)}><RxDotFilled /></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
