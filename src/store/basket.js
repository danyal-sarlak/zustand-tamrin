/* import { create } from "zustand";

const useBasket = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({
    items: [...state.items, item],
  })),
  removeItem: (name) => set((state) => ({
    items: state.items.filter((item) => item.name !== name),
  })),
 
}));

export default useBasket;
 */

import { create } from "zustand";

const useBasket = create((set)=>({
    items:[],
    actions:{
        addItem:(item)=>set((state)=>({
            items: [...state.items, item]
              })),
           removeItem:(name)=>set((state)=>({
           items: state.items.filter((item)=>item.name !== name)
           }))
    }
    
 
   
    

}))