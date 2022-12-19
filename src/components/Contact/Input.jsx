import { useForm } from "react-hook-form";

export const Input = ({ type, placeholder, name, required = true }) => {
  return (
    <>
      <label className="hidden">{name}</label>
    </>
  );
};
