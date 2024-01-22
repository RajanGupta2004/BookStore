import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="  capitalize flex justify-between text-center p-3">
        <a
          href="/"
          className="text-2xl font-bold  ml-4 md:ml-2 md:text-xl cursor-pointer"
        >
          E-BookStore
        </a>
        <div className="flex mx-4 gap-2">
          <a
            href=""
            className="border-solid border-2 border-stone-500  rounded px-2  cursor-pointer"
          >
            login
          </a>
          <a
            href=""
            className="border-solid border-2 border-stone-500 rounded px-2"
          >
            Create Account
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
