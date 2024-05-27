import React from 'react';

export function NewsLetter() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* <h3 className="mb-4 text-lg font-semibold text-gray-900">Subscribe to our Newsletter</h3> */}
      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
