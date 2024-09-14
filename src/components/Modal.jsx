import React from "react";
import { GrClose } from "react-icons/gr";

import { modalFunc } from "../redux/modalSlice";
import { useDispatch } from "react-redux";

const Modal = ({ title, content, btnText, btnFunc }) => {
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-80">
      <div className="w-[350px] bg-white shadow-lg rounded-md p-4">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="text-2xl">{title}</div>
          <GrClose
            className="cursor-pointer"
            onClick={() => dispatch(modalFunc())}
            size={24}
          />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
