'use client';

type InputProps = {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ id, name, type = 'text', placeholder, required, autoComplete, className, ...props }: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      className={`border border-gray-300 bg-white text-gray-900 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}