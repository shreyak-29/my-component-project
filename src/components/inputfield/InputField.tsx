import React from 'react';
import type { ChangeEvent } from 'react';

// Define the component's props interface
interface InputFieldProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined', // Set a default variant
  size = 'md', // Set a default size
}) => {
  // Determine Tailwind CSS classes based on props
  const baseClasses = 'w-full rounded-md border transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 shadow-sm';
  const stateClasses = invalid
    ? 'border-red-500 focus:border-red-500 focus:ring-red-400'
    : disabled
    ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
    : 'focus:border-blue-500';

  const sizeClasses = {
    sm: 'text-sm py-1 px-2',
    md: 'text-base py-2 px-3',
    lg: 'text-lg py-3 px-4',
  }[size];

  const variantClasses = {
    filled: 'bg-gray-100 border-transparent',
    outlined: 'bg-white border-gray-300',
    ghost: 'bg-transparent border-transparent focus:border-gray-300',
  }[variant];

  const helperOrError = errorMessage ? (
    <p className="mt-2 text-xs text-red-500 font-medium">{errorMessage}</p>
  ) : helperText ? (
    <p className="mt-2 text-xs text-gray-500">{helperText}</p>
  ) : null;

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-semibold text-gray-700 select-none">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {/* Optional icon slot (extensible) */}
        {/* <span className="absolute left-3 text-gray-400">🔍</span> */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={`${baseClasses} ${stateClasses} ${sizeClasses} ${variantClasses} ${/* icon slot */ ''}`}
        />
      </div>
      {helperOrError}
    </div>
  );
};

export default InputField;