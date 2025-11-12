import React from "react";

interface InputFieldProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  id,
  name,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
        aria-describedby={`${id}-error`}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
