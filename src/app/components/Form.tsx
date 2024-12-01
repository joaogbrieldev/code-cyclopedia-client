import Link from "next/link";
import { FormEvent } from "react";

type Field = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
};

type FormProps = {
  title: string;
  fields: Field[];
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  linkText?: string;
  linkHref?: string;
};

export default function Form({
  title,
  fields,
  handleSubmit,
  buttonText,
  linkText,
  linkHref,
}: FormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full max-w-[28rem] bg-white p-16 border-r-4 shadow-custom"
    >
      <p className="text-xl font-medium text-black mb-20">{title}</p>
      {fields.map((field, index) => (
        <label
          key={index}
          className="w-full text-[#777777] self-start custom-focus transition duration-150 ease-linear"
        >
          {field.label}
          <input
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            className="focus:outline-none text-sm text-[#404040] py-4 w-full border-b border-[#a0a0a0] mb-12 transition duration-150 ease-linear"
            type={field.type}
            name={field.name}
          />
        </label>
      ))}
      <button
        type="submit"
        className="text-xs leading-8 font-bold uppercase w-full py-4 cursor-pointer bg-black text-white rounded mt-2 transition duration-150 ease-linear hover:bg-[#81259d] focus:outline-none"
      >
        {buttonText}
      </button>
      {linkText && linkHref && (
        <Link href={linkHref} className=" text-gray-600 mt-4">
          {linkText}
        </Link>
      )}
    </form>
  );
}
