
import React from "react";
import useBasket from "../store/basket"; // مسیر مناسب به فایل استوری Zustand را وارد کنید

export default function ProductItem({ data }) {
  const { name, imageSrc, price } = data;
  const {addItem} = useBasket((state) => state.actions);

  return (
    <div className="p-4 bg-gray-200 m-3">
      <img className="w-[250px] h-[220px]" src={imageSrc} alt={name} />
      <h3 className="text-blue-950">{name}</h3>
      <div className="flex justify-between">
        <h5 className="font-bold">Price: </h5>
        <span>{price}</span>
      </div>
      <button
        onClick={()=>addItem({name,imageSrc,price})}
        className="p-3 rounded-lg bg-red-600 text-white m-4"
      >
        Add item
      </button>
    </div>
  );
}
/* import React from "react";

export default function ProductItem({ data }) {
  const { name, imageSrc, price } = data;
  return (
    <div className="p-4 bg-gray-200 m-3 ">
      <img className="w-[250px] h-[220px]" src={imageSrc} alt={name} />
      <h3 className="text-blue-950">{name}</h3>
      <div className="flex justify-between">
        <h5 className="font-bold ">Price: </h5>
        <span>{price}</span>
      </div>
      <button onClick={()=>{}} className="p-3 rounded-lg bg-red-600 text-white m-4">add item</button>
    </div>
  );
}
 */
