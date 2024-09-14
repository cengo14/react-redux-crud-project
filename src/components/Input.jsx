import React from "react";

const Input = ({ value, type, id, name, onChange, placeholder }) => {
  return (
    <input
      className="h-10 w-full border rounded-md p-2 outline-none mt-3"
      type={type}
      value={value}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
