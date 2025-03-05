'use client';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, type = 'button', className, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}