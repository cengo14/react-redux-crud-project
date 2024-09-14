import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-around bg-amber-600 text-white px-4 py-3">
      <div className="text-2xl">REACT UYGULAMASI</div>
      <div className="flex items-center gap-5">
        <div>
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg text-black"
          >
            <option value="desc">Azalan</option>
            <option value="asc">Artan</option>
          </select>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
            className="h-10 rounded-lg text-black p-4 w-36"
            type="text"
            placeholder="Arama yapınız.."
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-amber-800 size-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdPostAdd className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
