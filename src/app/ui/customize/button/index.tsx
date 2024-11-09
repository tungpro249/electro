'use client';

import React from 'react';

const ButtonBase = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-500 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
