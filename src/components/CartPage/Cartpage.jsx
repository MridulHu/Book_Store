import React from "react";

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        {cart.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <ul>
            {cart.map((book) => (
              <li key={book.id} className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-700">By {book.author}</p>
                </div>
                <button
                  onClick={() => removeFromCart(book.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartPage;
