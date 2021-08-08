import { createContext, useContext, useReducer } from "react";
import {reducer} from "./reducer"
const cartContext = createContext();
export default function UseCartContext({ children }) {
  const [state,dispatch]=useReducer(reducer,{cart:[],later:[]})
  return (
    <cartContext.Provider value={{ state,dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart(){
    return useContext(cartContext)
}