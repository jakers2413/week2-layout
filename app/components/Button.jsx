import React from 'react';
import Link from 'next/link';

export default function Button({ text, ...props }) {
  return (
    <button 
      className="px-6 py-2.5 text-sm font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-full transition-all duration-150 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
      {...props}
    >
      {text}
    </button>
  );
}

