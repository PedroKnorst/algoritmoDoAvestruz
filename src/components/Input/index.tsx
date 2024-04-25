import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
}

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 text-white">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className="border-white text-black px-2 py-1 text-sm appearance-none rounded-md focus:outline-none"
        id={id}
        {...props}
      />
    </div>
  );
};

export default Input;
