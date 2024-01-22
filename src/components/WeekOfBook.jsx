import React from "react";
import book4 from "../assets/images/books/Book4.jpg";

const WeekOfBook = () => {
  return (
    <div className=" mt-10 bg-gradient-to-r from-gray-400 vis-gray-700 flex justify-center items-center">
      <div className=" flex flex-col items-center my-10">
        <img className="w-32 h-40  rounded-lg" src={book4} alt="" />
        <h2 className="text-xl font-bold text-slate-20  ">Book Of the Week</h2>
        <p className="italic ">"The Never Garden"</p>
        <p className="">By Jhon David</p>
      </div>
    </div>
  );
};

export default WeekOfBook;
