import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Input from "../components/input";
import Button from "../components/Button";
import { modalFunc } from "../redux/modalSlice";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState("data", {
    name: "",
    price: "",
    url: "",
  });

  const onChangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  let loc = location.search.split("=")[1];
  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((dt) => dt.id == loc));
    }
  }, [loc]);
  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
    setProductInfo("");
  };
  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    navigate("/");
  };
  const contentModal = (
    <>
      <Input
        value={productInfo?.name}
        type={"text"}
        placeholder={"Ürün ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        value={productInfo?.price}
        type={"number"}
        placeholder={"Fiyat ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        style={{ display: "none" }}
        type={"file"}
        placeholder={"Resim seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button
        onClick={loc ? buttonUpdateFunc : buttonFunc}
        btnText={loc ? "Güncelle" : "Ekle"}
      />
    </>
  );
  const filteredItem = data.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <div>
      <div className="flex items-center flex-wrap m-10">
        {filteredItem?.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>

      {modal && (
        <Modal
          title={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
          content={contentModal}
        />
      )}
    </div>
  );
};

export default Product;
