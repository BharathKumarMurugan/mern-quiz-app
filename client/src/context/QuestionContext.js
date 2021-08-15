import React, { createContext } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  return <QuestionContext.Provider>{props.children}</QuestionContext.Provider>;
};
