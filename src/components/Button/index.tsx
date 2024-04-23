import { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | ReactElement;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-yellow-400 min-w-16 p-1 text-black rounded-md border border-yellow-400 shadow-md text-base hover:bg-black transition hover:text-yellow-400"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
