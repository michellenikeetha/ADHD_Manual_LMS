// components/Button.js
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex w-[200px] h-[50px] justify-center items-center bg-[#1677ff] rounded-full shadow-[0_2px_0_0_rgba(5,145,255,0.1)] text-white text-[18px] leading-[24px] hover:bg-[#1366cc] focus:outline-none"
    >
      <div className="flex gap-[8px] items-center">
        <div
          className="w-[16px] h-[16px] bg-cover"
          style={{ backgroundImage: `url(${require('../assets/arrow.png')})` }}
        />
        <span>{text}</span>
      </div>
    </button>
  );
};

export default Button;
