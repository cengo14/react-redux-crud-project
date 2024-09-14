import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  console.log(item);
  const navigate = useNavigate();
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const handleUpdateModal = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${item?.id}`);
  };
  return (
    <div className="size-[200px] relative m-2 rounded-md">
      <img className="size-full rounded-md" src={item?.url} alt="" />
      <div className="absolute left-0 bottom-0 bg-amber-600 text-white w-full px-2">
        <p className="border-b-2 font-semibold font-mono">{item?.name}</p>
        <p>{item?.price}₺</p>
      </div>
      <button
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-2"
      >
        <BsThreeDots color="white" size={24} />
      </button>
      {openEdit && (
        <div className="bg-black border border-white text-white absolute top-0 right-2 p-2 text-sm flex flex-col items-center gap-2">
          <button
            onClick={handleUpdateModal}
            className=" border-b border-white text-white"
          >
            Güncelle
          </button>
          <button
            onClick={() => dispatch(deleteDataFunc(item?.id))}
            className=" border-b border-white text-white"
          >
            Sil
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
