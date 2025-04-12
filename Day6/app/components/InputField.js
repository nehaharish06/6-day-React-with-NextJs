import React from 'react';
export default function InputField({ value,onChange, placeholder, type }) {
  return (
    <div className="bg-gray-200 p-4 rounded shadow-md ">
    <input type={type}
      className='w-full p-3'
      value={value}
      onChange={onChange}
        placeholder={placeholder}
    />
    </div>
  );
}