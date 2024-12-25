import React from "react";
import Book1 from "../../../src/assets/books/Book1.jpg";
import Book2 from "../../../src/assets/books/Book2.jpg";
import Book3 from "../../../src/assets/books/Book3.jpg";
import Book4 from "../../../src/assets/books/Book4.jpg";
import Book5 from "../../../src/assets/books/Book5.jpg";

const Books = ({ handleOrder }) => {
  const booksData = [
    { id: 1, img: Book1, title: "Who's there", rating: 5.0, author: "Someone" },
    { id: 2, img: Book2, title: "His Life", rating: 4.5, author: "John" },
    { id: 3, img: Book3, title: "Lost boys", rating: 4.7, author: "Lost Girl" },
    { id: 4, img: Book4, title: "Sword", rating: 4.9, author: "Mridul Das" },
    { id: 5, img: Book5, title: "Soul", rating: 4.5, author: "Olivia Wilson" },
  ];

  return (
    <div className="mt-14 mb-12" id="top-books">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">Top Books</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {booksData.map((book) => (
            <div key={book.id} className="space-y-3">
              <img
                src={book.img}
                alt={book.title}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-700">{book.author}</p>
                <button
                  onClick={() => handleOrder(book)}
                  className="bg-primary text-white py-1 px-3 rounded-md mt-2"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
