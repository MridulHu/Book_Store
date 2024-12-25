import React, { useState } from "react";
import Book1 from "../../../src/assets/books/Book1.jpg";
import Book2 from "../../../src/assets/books/Book2.jpg";
import Book3 from "../../../src/assets/books/Book3.jpg";
import Book4 from "../../../src/assets/books/Book4.jpg";
import Book5 from "../../../src/assets/books/Book5.jpg";
import Vector from "../../../src/assets/website/blue-pattern.jpg";
import OrderPopup from "../OrderPopup/OrderPopup.jsx";

const ImageList = [
  {
    id: 4,
    img: Book4,
    title: "Sword",
    description: "lorem His Sword dolor sit amet, consectetur adipiscing elit.",
    author: "Mridul Das",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description: "Lost Boy consectetur adipiscing elit.",
    author: "Mridul Das",
  },
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    description: "Who's there lorem ipsum dolor sit amet.",
    author: "Mridul Das",
  },
];

const Hero = ({ addToCart }) => {
  const [imageId, setImageId] = useState(Book4);
  const [title, setTitle] = useState("Sword");
  const [description, setDescription] = useState(
    "lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  const handleOrderPopup = () => {
    const selected = ImageList.find((item) => item.title === title);
    setSelectedBook(selected);
    setOrderPopup(true);
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                {title}
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                  by Mridul Das
                </p>
              </h1>
              <p className="text-sm">{description}</p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  src={imageId}
                  alt="book image"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto"
                />
              </div>
              <div className="flex lg:flex-col justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    onClick={() => {
                      setImageId(item.img);
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    alt="book thumbnail"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderPopup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        book={selectedBook}
        addToCart={addToCart}
      />
    </>
  );
};

export default Hero;
