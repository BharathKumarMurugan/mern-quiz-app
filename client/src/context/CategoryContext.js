import React, { createContext } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  return <CategoryContext.Provider>{props.children}</CategoryContext.Provider>;
};
