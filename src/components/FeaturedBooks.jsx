import { FeaturedBooksdata } from "./data";
const FeaturedBooks = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mx-10 my-10">Featured Books</h2>
      <swiper-container slides-per-view="6" enabled="true" navigation="true">
        {FeaturedBooksdata.map((book) => (
          <swiper-slide>
            <div
              className="flex item-center flex-col mx-20"
              style={{ width: "150px" }}
            >
              <a href="">
                <img
                  className="rounded-lg"
                  src={book.bookCover}
                  alt={book.title}
                  width="100px"
                />
              </a>
              <p className="font-semibold">
                Rs-{book.price}/{" "}
                <span className="line-through text-sm ">{book.mrp}</span>
              </p>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};

export default FeaturedBooks;
