import React from "react";
import classes from "./myButton.module.css";

const myButton = ({ children, ...props }) => {
  return <button {...props}  className={classes.btn}>{children}</button>;
};

export default myButton;
