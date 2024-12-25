import React from "react";
import Book1 from "../../../src/assets/books/Book1.jpg";
import Book2 from "../../../src/assets/books/Book2.jpg";
import Book3 from "../../../src/assets/books/Book3.jpg";
import Book4 from "../../../src/assets/books/Book4.jpg";
import Book5 from "../../../src/assets/books/Book5.jpg";
import { FaStar } from "react-icons/fa";

const ImageList = [
  {
    id: 4,
    img: Book4,
    title: "Sword",
    description:
      "lorem His Sword dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description:
      "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Services = ({ handleOrderPopup }) => {
  // Smooth scroll to the "Top Books" section
  const scrollToTopBooks = () => {
    const topBooksSection = document.getElementById("top-books");
    if (topBooksSection) {
      topBooksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          {/* Best books section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ImageList.map((book) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                key={book.id}
              >
                <div className="h-[100px]">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{book.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {book.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={scrollToTopBooks}
              className="bg-primary text-white py-2 px-6 rounded-full hover:bg-secondary"
            >
              Best Seller
            </button>
          </div>
        </div>
      </div>

      {/* "Top Books" Section */}
      <span id="top-books"></span>
      <div className="py-10 bg-gray-100">
        <div className="container">
          <h2 className="text-4xl font-bold text-center">Top Books</h2>
          <p className="text-center text-sm text-gray-400">
            Browse through the best-selling and most popular books.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
