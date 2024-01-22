import React from "react";
import { author } from "./data";

const FeaturedAuthor = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center my-4">Featured Authors</h2>
      <div className="flex justify-around flex-wrap ">
        {author.map((author) => (
          <div key={author.id} className="my-4">
            <img
              className="w-28  h-28 rounded-lg object-cover"
              src={author.profile}
              alt={author.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedAuthor;
