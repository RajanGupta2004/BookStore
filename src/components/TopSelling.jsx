import { books } from "./data";
const TopSelling = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mx-10 my-10">Top Selling</h2>
      <swiper-container
        virtual="true"
        slides-per-view="6"
        autoplay="true"
        speed="500"
        css-mode="true"
      >
        {books.map((book) => (
          <swiper-slide>
            <div
              className="flex flex-col items-center mx-20"
              style={{ width: "150px" }}
            >
              <img
                className="rounded-lg"
                src={book.bookCover}
                alt={book.title}
                width="100px"
              />
              <p className="text-center">Rs-{book.price}</p>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};

export default TopSelling;
