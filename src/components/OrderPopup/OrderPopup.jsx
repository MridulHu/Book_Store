import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup, book, addToCart }) => {
  if (!book) return null;

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md w-[300px]">
            <div className="flex items-center justify-between">
              <h1>Order Your Book</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-700">By {book.author}</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    addToCart(book);
                    setOrderPopup(false);
                  }}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
