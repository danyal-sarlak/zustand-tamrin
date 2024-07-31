import React from "react";
import useBasket from "../store/basket"; // مسیر مناسب به فایل استوری Zustand را وارد کنید

export default function Basket() {
  const {items} = useBasket((state) => state.actions);
  const {removeItem} = useBasket((state) => state.actions);

  return (
    <div className="p-4 bg-gray-200 m-3">
      <h2 className="text-blue-950">Basket</h2>
      <ul>
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-gray-200 m-3">
            <img className="w-[250px] h-[220px]" src={item.imageSrc} alt={item.name} />
            <h3 className="text-blue-950">{item.name}</h3>
            <div className="flex justify-between">
              <h5 className="font-bold">Price: </h5>
              <span>{item.price}</span>
            </div>
            <button
            onClick={()=>removeItem(item.name)}
              className="p-3 rounded-lg bg-red-600 text-white m-4"
            >
              Remove item
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
