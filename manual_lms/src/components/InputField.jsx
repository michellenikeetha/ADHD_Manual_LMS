// components/InputField.js
import React from 'react';

const InputField = ({ type, placeholder, icon }) => {
  return (
    <div className="relative w-full">
      {icon && <span className="absolute left-3 top-3">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
