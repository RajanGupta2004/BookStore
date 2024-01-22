import React from "react";
import { books } from "./data.js";

const Hero = () => {
  return (
    <>
      <div className="  mx-10 mt-16 p-4 flex gap-20 justify-around   ">
        <div className=" p-5 ">
          <h1 className="text-5xl font-bold my-2">
            Unlock world, <br /> Turn pages...
          </h1>
          <p className="">
            "A book is a timeless voyage to worlds unknown, a refuge for the
            mind, and a companion in solitude."
          </p>
        </div>
        <div className=" w-52 h-60 ">
          <swiper-container
            loop="true"
            effect="cards"
            autoplay="true"
            rotate="true"
            slideShadows="true"
          >
            {books.map((book) => (
              <swiper-slide key={book.id}>
                <img
                  className="rounded"
                  src={book.bookCover}
                  alt={book.title}
                  width={"200px"}
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,202.7C672,203,768,149,864,133.3C960,117,1056,139,1152,160C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Hero;
