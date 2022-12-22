import React from "react";

interface IButtonProps {
  link: string;
  children: string;
}

export default ({ link, children }: IButtonProps) => {
  return (
    <div>
      <a target="_blank" href={link}>
        {children}
      </a>
    </div>
  );
};
