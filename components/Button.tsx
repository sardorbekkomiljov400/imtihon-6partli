import React from "react";

type ButtonPropsType = {
  title?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit";
  iconPost?: "left" | "right";
  extraStyle?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({
  type = "button",
  title,
  icon,
  iconPost = "left",
  extraStyle = "",
  onClick,
}: ButtonPropsType) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${extraStyle} border-2 border-black cursor-pointer duration-300 active:opacity-20 flex items-center gap-2`}
    >
      {icon && iconPost === "left" && icon}
      {title && <span>{title}</span>}
      {icon && iconPost === "right" && icon}
    </button>
  );
}

export default Button;